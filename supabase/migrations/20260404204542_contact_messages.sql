-- Contact messages table for storing form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
DROP POLICY IF EXISTS "anyone_can_insert_contact_messages" ON public.contact_messages;
CREATE POLICY "anyone_can_insert_contact_messages"
ON public.contact_messages
FOR INSERT
TO public
WITH CHECK (true);

-- Only authenticated users (admin) can read messages
DROP POLICY IF EXISTS "authenticated_can_read_contact_messages" ON public.contact_messages;
CREATE POLICY "authenticated_can_read_contact_messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);
