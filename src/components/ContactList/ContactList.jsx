import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items || []);
  const filter = useSelector((state) => state.filters?.name || "");
  console.log("contacts:", contacts);
  console.log("filter:", filter);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
