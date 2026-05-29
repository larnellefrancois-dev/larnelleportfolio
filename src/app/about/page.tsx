import { redirect } from 'next/navigation';
/** Legacy route — about now lives under the Product Design realm. */
export default function AboutRedirect() {
  redirect('/product-design/about');
}
