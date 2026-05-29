import { redirect } from 'next/navigation';
/** Legacy route — work now lives under Product Design case studies. */
export default function WorkRedirect() {
  redirect('/product-design/case-studies');
}
