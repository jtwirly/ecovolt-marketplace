import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ec0ecac7-d1d4-495a-a044-5b8c09bd6865', '1Chester23@gmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv67890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b0fbe95a-bf92-462b-a174-f6783bb92ad7', '9Kayli.Doyle@yahoo.com', 'Eli Black', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv11223', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b2169067-9a22-44c0-bd8b-260ee297f80a', '17Rowland.Lynch@hotmail.com', 'Eli Black', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f15ef1d1-4904-4a79-9563-c50899417199', '25Wilfred.Mitchell@gmail.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv09876', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', '33Ella_Marvin0@yahoo.com', 'Dana White', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200', '41Burdette.Moen33@yahoo.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv09876', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('977fbf76-94ee-4b36-85f8-e382ee215542', '49Chelsie_Zboncak@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv54321', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('09f3494a-6273-4a4f-8626-77019a38070d', '57Jasmin17@hotmail.com', 'Eli Black', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv11223', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('00cddd35-5f65-43dd-9199-5a01578cbb30', '73Sydnee_Hoeger53@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('9bcd369c-b1f4-4efb-be1a-a41e0c324363', 'Exclusive offers on green energy products', 'bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('63af56c4-5a0c-4779-860d-3555f8f732cd', 'Monthly clean energy marketplace newsletter', '09f3494a-6273-4a4f-8626-77019a38070d');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('714ef5b5-d9ad-49f0-8b21-2982c30a62fd', 'Weekly wind energy savings report', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c4a7a6c3-e9ac-441b-b370-e78e1674e533', 'Daily tips for maximizing solar panel efficiency', 'bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('705b0271-a340-4f1b-94eb-5787fba1c7b7', 'Monthly clean energy marketplace newsletter', '977fbf76-94ee-4b36-85f8-e382ee215542');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('91199dd8-4e27-49d4-93e7-631ee0e0a070', 'Monthly clean energy marketplace newsletter', 'b0fbe95a-bf92-462b-a174-f6783bb92ad7');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('cb93e5da-95c0-40fc-8864-7b3171513539', 'Subscription to solar energy updates', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('7a1ace7c-7ccd-477e-9836-e0661d8cbd65', 'Subscription to solar energy updates', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8bd651fb-89c9-4c1d-b007-14248a31bb36', 'Exclusive offers on green energy products', 'b0fbe95a-bf92-462b-a174-f6783bb92ad7');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d0565aed-355e-40d7-b322-b80d03ac8100', 'Monthly clean energy marketplace newsletter', '977fbf76-94ee-4b36-85f8-e382ee215542');

INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('fbf7b953-7389-4d83-ae4c-a50d1f949f18', 'Hydroelectric Power', 'Power generated by wind turbines.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('41d3c948-b2ab-43ac-b572-52148738c776', 'Geothermal Energy', 'Power generated by wind turbines.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('18e6ef3d-bff5-4d06-86e7-5ad1af59afa4', 'Hydroelectric Power', 'Power generated by wind turbines.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('dc6cce19-fa28-4c40-a259-f91368f675f9', 'Biomass Energy', 'Energy harnessed from the suns rays.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('a68f4545-b0a9-4732-a7ff-bd9dedbafaa0', 'Hydroelectric Power', 'Heat energy extracted from the earth.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('39079ace-b99b-40f0-b408-8e013ff08fc4', 'Wind Energy', 'Energy harnessed from the suns rays.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('3de78641-624f-4cc9-a16c-f33426e3d971', 'Hydroelectric Power', 'Heat energy extracted from the earth.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('11a3bb34-8710-438c-a296-dc3c67ce1bb7', 'Wind Energy', 'Heat energy extracted from the earth.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('7344fb6d-f86b-4806-81d2-f70781dcfbe0', 'Solar Power', 'Energy harnessed from the suns rays.');
INSERT INTO "EnergyType" ("id", "name", "description") VALUES ('3a8ae1de-9755-4602-be86-aa151660c220', 'Geothermal Energy', 'Energy derived from organic materials.');

INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('6cb3c374-20d3-4610-a63c-76fe2de6b14e', '131 18 Spring St, New York, NY 10012', 'Sunnyvale', 'Oregon', 'Australia', '97201', 842, 742, '00cddd35-5f65-43dd-9199-5a01578cbb30');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('8b039f45-5c47-43f9-8089-e06a06213941', '139 18 W 29th St, New York, NY 10001', 'Eco City', 'Oregon', 'Brazil', '94086', 451, 948, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('8e5b14c3-e657-4dd6-ae60-701377598278', '147 136 E 13th St, New York, NY 10003', 'Sustain City', 'Texas', 'Canada', '80201', 679, 881, 'b2169067-9a22-44c0-bd8b-260ee297f80a');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('a3e63f96-0f6a-4869-a232-21f752707d26', '155 330 W Broadway, New York, NY 10013', 'Renewville', 'Colorado', 'Brazil', '10001', 795, 857, '00cddd35-5f65-43dd-9199-5a01578cbb30');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('6336e0a4-7029-4206-ac3b-aeadcd8ee32f', '163 42 E 20th St, New York, NY 10003', 'Eco City', 'Texas', 'Germany', '80201', 163, 534, 'b0fbe95a-bf92-462b-a174-f6783bb92ad7');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('d2001c3c-ec57-4487-96f3-008ff6db8456', '171 430 Lafayette St, New York, NY 10003', 'Sunnyvale', 'Colorado', 'Canada', '73301', 3, 694, 'f15ef1d1-4904-4a79-9563-c50899417199');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('211cd9aa-fc5e-4fc9-9765-15dada7083cf', '179 91 Christopher St, New York, NY 10014', 'Renewville', 'Colorado', 'USA', '73301', 262, 667, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('c7f669da-83d1-4699-914b-6ba922154fd8', '187 18 Spring St, New York, NY 10012', 'Renewville', 'New York', 'USA', '94086', 445, 813, 'b0fbe95a-bf92-462b-a174-f6783bb92ad7');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('cb9bf003-c477-476b-8f5d-13ed6c836fe7', '195 430 Lafayette St, New York, NY 10003', 'Green Town', 'New York', 'USA', '94086', 948, 466, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Location" ("id", "address", "city", "state", "country", "postalCode", "latitude", "longitude", "userId") VALUES ('d74adad5-7bdd-4fe0-8bed-1227ef5a0599', '203 91 Christopher St, New York, NY 10014', 'Eco City', 'New York', 'USA', '80201', 387, 665, '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b');

INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('842171cd-3e5b-4a3d-bb26-def4d6e113c7', 164, 271, '2024-03-27T19:57:05.445Z', 'sold', '09f3494a-6273-4a4f-8626-77019a38070d', '3de78641-624f-4cc9-a16c-f33426e3d971');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('17b5ffef-5062-44e8-8dc4-60ecf7140bf5', 451, 774, '2024-08-10T01:50:22.485Z', 'canceled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7344fb6d-f86b-4806-81d2-f70781dcfbe0');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('ef9bc9c5-15fe-46b8-aad1-2721f70bf353', 991, 86, '2024-03-03T01:27:01.835Z', 'canceled', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', 'fbf7b953-7389-4d83-ae4c-a50d1f949f18');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('cd44be70-4335-4810-add8-6fe8e46383e5', 808, 859, '2024-03-11T14:05:58.569Z', 'reserved', '00cddd35-5f65-43dd-9199-5a01578cbb30', '39079ace-b99b-40f0-b408-8e013ff08fc4');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('03985ac8-c4ee-4aa7-a2ff-e9efa90c152c', 483, 129, '2024-05-23T05:35:53.400Z', 'pending', 'ec0ecac7-d1d4-495a-a044-5b8c09bd6865', '11a3bb34-8710-438c-a296-dc3c67ce1bb7');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('85959308-e63c-449f-9d6d-a39a920ecf1f', 495, 1000, '2024-10-20T07:33:24.278Z', 'reserved', 'b2169067-9a22-44c0-bd8b-260ee297f80a', '7344fb6d-f86b-4806-81d2-f70781dcfbe0');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('05372720-a700-46d5-836a-060d9cabf276', 797, 385, '2024-06-27T07:32:36.655Z', 'reserved', '09f3494a-6273-4a4f-8626-77019a38070d', '7344fb6d-f86b-4806-81d2-f70781dcfbe0');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('d646cbe3-1734-489a-92b4-d6b9f6b967a3', 755, 175, '2024-07-15T08:28:19.347Z', 'pending', '977fbf76-94ee-4b36-85f8-e382ee215542', '18e6ef3d-bff5-4d06-86e7-5ad1af59afa4');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('f53d111c-4069-40d2-9ec2-f80b99e0841f', 682, 935, '2024-09-21T23:44:17.837Z', 'sold', '00cddd35-5f65-43dd-9199-5a01578cbb30', 'dc6cce19-fa28-4c40-a259-f91368f675f9');
INSERT INTO "EnergyListing" ("id", "quantity", "price", "listingDate", "status", "userId", "energyTypeId") VALUES ('7f57fa06-f6a0-4ea7-ba64-9df08ba1419c', 406, 184, '2024-09-27T00:59:32.135Z', 'canceled', 'bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200', 'dc6cce19-fa28-4c40-a259-f91368f675f9');

INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('e602e2ca-f5bf-4b51-aa55-76c88b5ba981', 956, 733, '2023-12-01T17:13:08.677Z', 'b0fbe95a-bf92-462b-a174-f6783bb92ad7', 'ec0ecac7-d1d4-495a-a044-5b8c09bd6865', '05372720-a700-46d5-836a-060d9cabf276');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('ee602f2c-8cc4-4fc7-9df3-f7de61f39d48', 381, 685, '2025-05-17T08:03:03.109Z', 'b0fbe95a-bf92-462b-a174-f6783bb92ad7', '00cddd35-5f65-43dd-9199-5a01578cbb30', '05372720-a700-46d5-836a-060d9cabf276');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('47492714-5deb-41e8-bfb5-0cdde7568f6b', 322, 968, '2024-11-18T03:44:11.167Z', '977fbf76-94ee-4b36-85f8-e382ee215542', '977fbf76-94ee-4b36-85f8-e382ee215542', '17b5ffef-5062-44e8-8dc4-60ecf7140bf5');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('aa45eb5c-9ee0-4ee8-8a73-ebc670429a7c', 76, 600, '2025-08-23T00:00:19.687Z', 'b2169067-9a22-44c0-bd8b-260ee297f80a', '977fbf76-94ee-4b36-85f8-e382ee215542', '05372720-a700-46d5-836a-060d9cabf276');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('c5921d6a-c10a-4042-9367-ca06a1cc5124', 446, 733, '2024-09-24T07:30:52.772Z', 'bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200', 'bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200', '03985ac8-c4ee-4aa7-a2ff-e9efa90c152c');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('e40ccc49-2b02-48c7-a9c7-dc949652f241', 35, 599, '2025-07-29T19:55:50.457Z', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', 'ec0ecac7-d1d4-495a-a044-5b8c09bd6865', '17b5ffef-5062-44e8-8dc4-60ecf7140bf5');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('02359960-a535-4f53-9727-69a9f9f0d354', 232, 191, '2023-12-07T15:09:18.826Z', '00cddd35-5f65-43dd-9199-5a01578cbb30', '00cddd35-5f65-43dd-9199-5a01578cbb30', '05372720-a700-46d5-836a-060d9cabf276');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('0f9ecec6-0505-4224-a20f-c0435e7f1b4d', 501, 467, '2024-11-24T07:18:28.642Z', 'f15ef1d1-4904-4a79-9563-c50899417199', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '05372720-a700-46d5-836a-060d9cabf276');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('cca94bc1-21e7-4168-a11c-51f7b28c4db8', 817, 573, '2024-11-10T11:52:07.867Z', '00cddd35-5f65-43dd-9199-5a01578cbb30', 'b0fbe95a-bf92-462b-a174-f6783bb92ad7', 'ef9bc9c5-15fe-46b8-aad1-2721f70bf353');
INSERT INTO "Transaction" ("id", "quantity", "totalPrice", "transactionDate", "buyerId", "sellerId", "energyListingId") VALUES ('3d732871-a93c-4558-bd40-6a53532918ff', 72, 668, '2024-06-27T07:18:52.675Z', 'bad8116f-bd3f-4f61-a7ff-bfd0f9c9d200', 'f15ef1d1-4904-4a79-9563-c50899417199', '842171cd-3e5b-4a3d-bb26-def4d6e113c7');

INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('c8a9e928-ef58-4c9f-8adf-c0021ccac347', 981, '2024-12-20T19:38:57.045Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fbf7b953-7389-4d83-ae4c-a50d1f949f18');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('9fabddd2-d81f-47a6-98a3-01c5bf87a9c4', 902, '2025-02-06T00:16:06.379Z', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', '7344fb6d-f86b-4806-81d2-f70781dcfbe0');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('cd12eba8-61d8-44b7-85bf-36b7fb7d3e34', 431, '2024-04-14T21:34:05.251Z', '09f3494a-6273-4a4f-8626-77019a38070d', 'dc6cce19-fa28-4c40-a259-f91368f675f9');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('f9975a8c-d559-4d37-86ed-4f45ffe252a4', 882, '2024-12-31T04:21:35.620Z', 'b2169067-9a22-44c0-bd8b-260ee297f80a', '3de78641-624f-4cc9-a16c-f33426e3d971');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('dc1ac299-8f5b-48cd-83a9-4f253d4b2d35', 131, '2024-02-13T11:28:44.482Z', 'f15ef1d1-4904-4a79-9563-c50899417199', 'dc6cce19-fa28-4c40-a259-f91368f675f9');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('bf0579e1-4d6a-47a8-8167-05894c375739', 11, '2025-02-12T08:54:00.742Z', '977fbf76-94ee-4b36-85f8-e382ee215542', 'dc6cce19-fa28-4c40-a259-f91368f675f9');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('5ee2f965-bb31-44c0-9d72-fa0c0594400c', 188, '2024-07-01T04:43:18.693Z', '09f3494a-6273-4a4f-8626-77019a38070d', '39079ace-b99b-40f0-b408-8e013ff08fc4');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('55eb2a55-00fe-4d09-8cd7-d250b2b55d6b', 80, '2025-09-13T20:06:13.431Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3a8ae1de-9755-4602-be86-aa151660c220');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('b6b346d7-2da5-4887-b8b4-1efdea6b575f', 122, '2024-10-05T23:02:09.039Z', '977fbf76-94ee-4b36-85f8-e382ee215542', '7344fb6d-f86b-4806-81d2-f70781dcfbe0');
INSERT INTO "EnergyConsumption" ("id", "consumptionAmount", "consumptionDate", "userId", "energyTypeId") VALUES ('60a8562c-d28d-4bad-b2cd-61470ed49ed5', 80, '2024-11-09T10:46:15.549Z', 'ec0ecac7-d1d4-495a-a044-5b8c09bd6865', '3a8ae1de-9755-4602-be86-aa151660c220');

INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('bdc8aa20-9d81-4273-9e10-7c431e4f6043', 439, '2025-08-20T23:25:28.614Z', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', '3a8ae1de-9755-4602-be86-aa151660c220');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('25f80f64-4ce4-41bb-a7e2-06004deff1ec', 66, '2024-07-06T05:42:51.485Z', '977fbf76-94ee-4b36-85f8-e382ee215542', '41d3c948-b2ab-43ac-b572-52148738c776');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('b5e96fa7-99f3-4b8d-b1c7-42d289963ade', 678, '2025-09-25T12:15:30.395Z', '00cddd35-5f65-43dd-9199-5a01578cbb30', 'dc6cce19-fa28-4c40-a259-f91368f675f9');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('5b9a68a4-6915-4783-8509-fe3a570a5478', 550, '2025-05-05T15:59:53.200Z', 'b2169067-9a22-44c0-bd8b-260ee297f80a', '11a3bb34-8710-438c-a296-dc3c67ce1bb7');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('2e21f761-da61-4bce-9b21-ebd884567872', 336, '2025-06-12T12:42:06.321Z', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', '3de78641-624f-4cc9-a16c-f33426e3d971');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('f44c03df-46f9-481c-9be7-6187e63f14f2', 547, '2025-01-29T19:08:28.168Z', 'b2169067-9a22-44c0-bd8b-260ee297f80a', '11a3bb34-8710-438c-a296-dc3c67ce1bb7');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('d4c9998f-80ae-4421-8ae0-b5fa7c680275', 609, '2023-10-24T09:15:28.677Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fbf7b953-7389-4d83-ae4c-a50d1f949f18');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('2023fde1-444f-4e7d-9fb7-3d6e83d31cd9', 292, '2025-10-14T01:02:23.082Z', '44d695a4-f3c3-4193-b4d2-bcbdeac22c7b', '41d3c948-b2ab-43ac-b572-52148738c776');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('b4f79874-106b-4b53-b459-fd5d1035e01b', 526, '2024-01-17T23:10:21.050Z', 'f15ef1d1-4904-4a79-9563-c50899417199', '7344fb6d-f86b-4806-81d2-f70781dcfbe0');
INSERT INTO "EnergyProduction" ("id", "productionAmount", "productionDate", "userId", "energyTypeId") VALUES ('ac6cda79-3f83-420f-8348-4e32994ceb79', 228, '2023-12-03T10:36:06.215Z', 'f15ef1d1-4904-4a79-9563-c50899417199', '3a8ae1de-9755-4602-be86-aa151660c220');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
