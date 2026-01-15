import { ContactService } from "@/services/contact.service";
import { CreateContactPayload } from "@/types/contact";

export const useContact = () => {
  const createContact = async (data: CreateContactPayload) => {
    const res = await ContactService.create(data);
    return res;
  };

  return {
    createContact,
  };
};
