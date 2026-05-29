import { redirect } from 'next/navigation';
/** Legacy route — consolidated into the case-studies tree. */
export default function WorkEnterpriseLoansRedirect() {
  redirect('/case-studies/enterprise-loans');
}
