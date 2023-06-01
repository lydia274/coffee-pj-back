const mongoose = require("mongoose");
const CoffeeShop = require("../models/CoffeeShop.model ");

const MONGODB_URI = "mongodb://localhost:27017/coffee-project";

const coffeeShops = [
  {
    name: "Café de Flore",
    address: "172 Boulevard Saint-Germain, 75006 Paris, France",
    image:
      "https://assets.vogue.com/photos/618e7c4badd0a25be01d750e/3:2/w_5304,h_3536,c_limit/GettyImages-1222654885.jpg",
    openingHours: "7H30-1H30",
    servings:    [],
    services: [],
  },
  {
    name: "Les Deux Magots",
    address: "6 Place Saint-Germain des Prés, 75006 Paris, France",
    image:
      "https://www.parisjazzclub.net/medias/photos_lieux/686-photo-terrasse/images/photo-terrasse-lg.jpg?20190222181026",
    openingHours: "7H30-1H",
    servings: [],
    services: [],
  },
  {
    name: "Café de la Paix",
    address: "5 Place de l'Opéra, 75009 Paris, France",
    image:
      "https://www.cafedelapaix.fr/assets/uploads/2021/09/cafe-de-la-paix-jg-photo-8-compress-960x640.jpg",
    openingHours: "08H00–23H00",
    servings: [],
    services: [],
  },
  {
    name: "Café des 2 Moulins",
    address: "15 Rue Lepic, 75018 Paris, France",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Paris_-_Café_des_2_Moulins_-_2004.jpg/1280px-Paris_-_Café_des_2_Moulins_-_2004.jpg",
    openingHours: "07:00–02:00",
    servings: [],
    services: [],
  },
  {
    name: "Café de l'Industrie",
    address: "16 Rue Saint-Sabin, 75011 Paris, France",
    image:
      "https://3.bp.blogspot.com/-ScmAtVHE3CQ/VyM7YKm-sOI/AAAAAAAAjbc/2ROBNTNrVCEsEvl_dpWVSsonQGIuO7isgCLcB/s1600/cafe-de-lindustrie-paris-11-3.JPG",
    openingHours: "8:30-2:00",
    servings: [],
    services: [],
  },
  {
    name: "Le Procope",
    address: "13 Rue de l'Ancienne Comédie, 75006 Paris, France",
    image:
      "https://ugc.zenchef.com/2/5/0/6/8/2/1/5/1/3/7/1/9/1651669500_261/0dd13a7a22f320a584a3031047dcdcdc.website.jpg",
    openingHours: "12 PM–12 AM",
    servings: [],
    services: [],
  },
  {
    name: "La Caféothèque",
    address: "52 Rue de l'Hôtel de ville, 75004 Paris, France",
    image: "https://s6056.pcdn.co/wp-content/uploads/DSC_0439-1.jpg",
    openingHours: "9 AM–7 PM",
    servings: [],
    services: [],
  },
  {
    name: "Strada Café",
    address: "24 Rue Monge, 75005 Paris, France",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/07/a3/ec/83/strada-cafe-monge.jpg",
    openingHours: "8AM–6:30 PM",
    servings: [],
    services: [],
  },
  {
    name: "Coutume Café",
    address: "47 Rue de Babylone, 75007 Paris, France",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipP52mNi8xF_1YvHROlU1_rTfhuZe29GZW4he_nR=s680-w680-h510",
    openingHours: "8:30 AM–3:30 PM",
    servings: [],
    services: [],
  },
  {
    name: "Café de l'Homme",
    address: "17 Place du Trocadéro et du 11 Novembre, 75016 Paris, France",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipM9jFV7oe-vQlToFTI5HPc0d8aKeiuKYZDBM6GO=s680-w680-h510",
    openingHours: "8:30 AM–3:30 PM",
    servings: [],
    services: [],
  },
];

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB from mongoose");

    // Drop database to avoid duplicates
    mongoose.connection.db.dropDatabase();

    // Create coffeeShops
    CoffeeShop.create(coffeeShops)
      .then((coffeeShopsFromDB) => {
        console.log(`Created ${coffeeShopsFromDB.length} coffeeShops`);

        // Once created, close the DB connection
        mongoose.connection.close();
      })
      .catch((err) =>
        console.log(
          `An error occurred while creating coffeeShops from the DB: ${err}`
        )
      );
  });
