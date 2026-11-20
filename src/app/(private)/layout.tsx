export const instant = false;

import { requireAuth } from "@/lib/session";

interface Props {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: Props) {
  await requireAuth();

  return (
    <>
      <main>{children}</main>
    </>
  );
}
