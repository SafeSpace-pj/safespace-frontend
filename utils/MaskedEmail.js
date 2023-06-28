const MaskEmail = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex > 1) {
      const maskedName = email[0] + '*'.repeat(atIndex - 2) + email[atIndex - 1];
      return maskedName + email.slice(atIndex);
    }
    return email;
  };

export default MaskEmail