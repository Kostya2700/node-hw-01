const { v4: idContacts } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      const contacts = JSON.parse(data);
      console.table(contacts);
    } catch (error) {
      console.log("error", error);
    }
  })();
}

function getContactById(contactId) {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      const contacts = JSON.parse(data);
      const getContact = contacts.find((item) => item.id === contactId);
      if (!getContact) {
        console.log(`Contact with ${contactId} not found`);
        return null;
      }
      console.table(getContact);
    } catch (error) {
      console.log("error", error);
    }
  })();
}

function addContact(name, email, phone) {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      const contacts = JSON.parse(data);
      const addContact = { name, email, phone, id: idContacts() };
      contacts.push(addContact);
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
      const newContacts = await fs.readFile(contactsPath, "utf-8");
      console.table(JSON.parse(newContacts));
    } catch (error) {
      console.log("error", error);
    }
  })();
}

function removeContact(contactId) {
  (async () => {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      const contacts = JSON.parse(data);
      const contact = contacts.filter((item) => item.id !== contactId);
      await fs.writeFile(contactsPath, JSON.stringify(contact));
      const deleteContacts = await fs.readFile(contactsPath, "utf-8");
      console.table(JSON.parse(deleteContacts));
    } catch (error) {
      console.log("error", error);
    }
  })();
}
module.exports = { listContacts, getContactById, removeContact, addContact };
