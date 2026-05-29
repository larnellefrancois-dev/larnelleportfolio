import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

serve(async (req) => {
  if (req?.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req?.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno?.env?.get("SUPABASE_URL");
    const supabaseServiceKey = Deno?.env?.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Supabase environment variables are not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: insertError } = await supabase?.from("contact_messages")?.insert({ name, email, message });

    if (insertError) {
      throw new Error(`Failed to save message: ${insertError.message}`);
    }

    // Attempt to send email via Resend if API key is configured
    const RESEND_API_KEY = Deno?.env?.get("RESEND_API_KEY");
    const isRealResendKey =
      RESEND_API_KEY &&
      RESEND_API_KEY !== "your-resend-api-key-here" && RESEND_API_KEY?.startsWith("re_");

    if (isRealResendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: ["hello@larnelle.me"],
          subject: `New message from ${name} — Larnelle Chambers Portfolio`,
          html: `
            <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #ffffff;">
              <h2 style="font-size: 24px; font-weight: 300; letter-spacing: -0.02em; color: #111111; margin-bottom: 32px;">New Contact Message</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #999999; width: 80px;">From</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #111111;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #999999;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #111111;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #999999; vertical-align: top; padding-top: 20px;">Message</td>
                  <td style="padding: 20px 0 12px 0; font-size: 14px; color: #666666; line-height: 1.6;">${message}</td>
                </tr>
              </table>
              <p style="margin-top: 40px; font-size: 10px; color: #999999; text-transform: uppercase; letter-spacing: 0.1em;">Sent via larnellechambers.com</p>
            </div>
          `,
          reply_to: email,
        }),
      });

      // Email failure is non-fatal — message is already saved to DB
      if (!res?.ok) {
        console.warn("Resend email failed (message still saved to DB):", await res?.text());
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
