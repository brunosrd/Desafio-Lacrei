export function gerarEmailRandomico() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }
    email += '@gmail.com';
    return email;
}


// const nodemailer = require('nodemailer');

// // Configuração do transporte de e-mail
// const transporter = nodemailer.createTransport({
//   service: 'estudante.sesisenai.org', 
//   auth: {
//     user: 'bruno_v_ribeiro@estudante.sesisenai.org.br',
//     pass: 'B@04088106024'
//   }
// });

// // Função para enviar e-mail
// const sendEmail = (to, subject, text) => {
//   const mailOptions = {
//     from: 'bruno_v_ribeiro@estudante.sesisenai.org.br',
//     to,
//     subject,
//     text
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
