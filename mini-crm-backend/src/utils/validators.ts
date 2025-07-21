export const validateCustomer = (name: string, email: string, phone: string): boolean => {
  if (!name || !email || !phone) return false;
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10,15}$/;
  return emailRegex.test(email) && phoneRegex.test(phone);
};
