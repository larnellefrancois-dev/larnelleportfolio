import { redirect } from 'next/navigation';

/** Legacy route — the portal now lives at the site root. */
export default function PortalRedirect() {
  redirect('/');
}
