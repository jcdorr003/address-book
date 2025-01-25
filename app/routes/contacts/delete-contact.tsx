import { redirect } from "react-router";
import type { Route } from "../contacts/+types/delete-contact";

import { deleteContact } from "../../data";

export async function action({ params }: Route.ActionArgs) {
  await deleteContact(params.contactId);
  return redirect("/");
}
