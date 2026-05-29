import { redirect } from 'next/navigation';
/** Legacy route — writing now lives under the Product Design realm. */
export default function WritingRedirect() {
  redirect('/product-design/writing');
}
