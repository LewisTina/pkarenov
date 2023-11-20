import nodemailer from 'nodemailer';
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { 
        name, 
        society, 
        phone, 
        email, 
        file,
        file_name,
        town,
        zip_code,
        message } = req.body;

    try {
      // Configuration du transporteur de messagerie
      let transporter = nodemailer.createTransport({
        host: process.env.CONTACT_FORM_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.CONTACT_FORM_USERNAME,
            pass: process.env.CONTACT_FORM_PASS,
        },
        tls: { rejectUnauthorized: false },
      });

      try{
        if(file_name != undefined && file_name != '' && !!file_name){
            const mailOptions = {
                from: `"PKA Rénov" <${process.env.CONTACT_FORM_USERNAME}>`,
                replyTo: email,
                to: process.env.PERSONAL_MAIL,
                subject: 'Nouveau message de contact',
                text:`Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nVille: ${zip_code} - ${town}Message: ${message || ''}\nSociety:${society || ''}`,
                attachments: [
                {
                  filename: file_name,
                  content: !!file.split(",")[1] ? Buffer.from(file.split(",")[1], 'base64') : file, // Contenu du fichier en Base64
                  encoding: 'base64', // Indiquez que le contenu est en Base64
                },
              ],
              };
        
              await transporter.sendMail(mailOptions);
          }
    
          else {
            const mailOptions = {
                from: `"PKA Rénov" <${process.env.CONTACT_FORM_USERNAME}>`,
                replyTo: email,
                to: process.env.PERSONAL_MAIL,
                subject: 'Nouveau message de contact',
                text:`Nom: ${name}\n Email: ${email}\ntéléphone: ${phone}\nVille: ${zip_code} - ${town} Message: ${message || ''}\nsociety:${society || ''},
                     `,
              };
        
              await transporter.sendMail(mailOptions);
    
          }
      } finally {
        var templatePath = path.resolve("src/pages/api/mail/templates", `answers.html`);
        var templateHtml = fs.readFileSync(templatePath, 'utf8');
        var template = handlebars.compile(templateHtml);
        var date = new Date(Date.now())
        var finalDate = date.toLocaleString('fr', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false})

        var replacements = {name: name, date: finalDate}
        try {
        var htmlToSend = template(replacements);
        }
        catch (err) {
        console.log("the error: ", err);
        return {
            "status": "fail",
            "message": err
        }
        }

        const mailOptions = {
            from: `"PKA Rénov" <${process.env.CONTACT_FORM_USERNAME}>`,
            to: email,
            subject: "Réponse automatique",
            html: htmlToSend, // html body
          }
      
          // Envoyez l'e-mail
          let info = await transporter.sendMail(mailOptions);
      
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      

      }

      console.log(`email send successfully to ${email}`)
      res.status(200).json({ message: 'message_send_success' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'fail_sending_email' });;
    }
  }

  else {
  res.send('Lewis tina node js mailer');
  }
}
