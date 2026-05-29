import { redirect } from 'next/navigation';

/** Legacy route — individual articles now live under /product-design/writing. */
export default async function WritingSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/product-design/writing/${slug}`);
}
