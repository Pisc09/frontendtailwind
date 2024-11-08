const EventEmitter = require("events");
const nodemailer = require("nodemailer");
const myEmitter = new EventEmitter();

// Configuration de Nodemailer pour envoyer des e-mails
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre.email@gmail.com",
    pass: "votreMotDePasse",
  },
});

// Fonction à exécuter lorsque l'événement est déclenché
function notifierCommande() {
  console.log(
    "Une commande a été enregistrée et la notification a été envoyée!",
  );

  // Configuration de l'e-mail
  let mailOptions = {
    from: "votre.email@gmail.com",
    to: "client@example.com",
    subject: "Confirmation de commande",
    text: "Votre commande a bien été enregistrée. Merci pour votre achat!",
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email envoyé: " + info.response);
  });
}

// Enregistrement de la fonction pour l'événement 'commandeEnregistrée'
myEmitter.on("commandeEnregistrée", notifierCommande);

// Déclenchement de l'événement 'commandeEnregistrée'
myEmitter.emit("commandeEnregistrée");
