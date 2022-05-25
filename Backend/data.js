import bcrypt from "bcryptjs"
const data = {
  users: [
    {
     
      loginEmail: 'admin2@example.com',
      loginPassword: bcrypt.hashSync('1234', 8),
      
    },
    {
      
      loginEmail: 'user2@example.com',
      loginPassword: bcrypt.hashSync('1234', 8),
      
    },
  ],
  
   
  };
  export default data;
  