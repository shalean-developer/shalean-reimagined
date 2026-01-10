-- Seed cleaners data from provided SQL file
-- This migration imports all 23 cleaners with their complete profile data
-- Maps photo_url to avatar_url and excludes authentication/location fields

INSERT INTO "public"."cleaners" (
  "id", 
  "name", 
  "photo_url",
  "rating", 
  "areas", 
  "bio", 
  "years_experience", 
  "specialties", 
  "phone", 
  "email", 
  "is_active", 
  "created_at", 
  "updated_at", 
  "is_available",
  "available_monday", 
  "available_tuesday", 
  "available_wednesday", 
  "available_thursday", 
  "available_friday", 
  "available_saturday", 
  "available_sunday", 
  "hire_date"
) VALUES 
('04d5ae12-5f78-464b-92c8-46d61df5b5cd', 'Silibaziso Moyo', '', 4.7, ARRAY['Claremont','Wynberg','Kenilworth','Cape Town','Constantia'], 'Experienced cleaner serving the Cape Winelands area. Specializes in luxury properties.', 1, ARRAY['Luxury cleaning','Wine estate cleaning','Deep cleaning'], '+27845559202', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, false, true, false, false, false, false, false, NULL),
('19e3eb27-5be0-4e8e-a654-e42d27586ada', 'Natasha Magashito', '', 4.7, ARRAY['Cape Town','Stellenbosch','Paarl'], 'Experienced cleaner serving the Cape Winelands area. Specializes in luxury properties.', 1, ARRAY['Luxury cleaning','Wine estate cleaning','Deep cleaning'], '+27678316466', '', true, '2025-10-16 22:22:13.815891+00', '2025-10-16 22:22:13.815891+00', true, true, true, true, false, true, true, true, NULL),
('21c9ed33-7054-49af-b91a-396a40746a51', 'Ngwira Madalitso', NULL, 5.0, ARRAY['Claremont'], NULL, NULL, NULL, '+27680582573', NULL, true, '2025-12-05 02:00:28.101478+00', '2025-12-05 02:00:28.101478+00', true, true, true, true, true, true, true, true, NULL),
('22304709-7c94-4d6b-b4bc-ed35e1c26fce', 'Lucia Pazvakavambwa', '', 4.9, ARRAY['Muizenberg','Constantia','Hout Bay','Clifton','Bantry Bay','Tamboerskloof','City Bowl','St James','Kalk Bay','Lakeside','False Bay','Woodstock','Rondebosch','Rosebank','Mowbary','Observatory','Cape Town','Green Point'], 'Experienced cleaner who takes pride in attention to detail. Great with move-in/out cleaning.', 1, ARRAY['Move-in/out','Office cleaning','Post-construction'], '+27812736804', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, false, true, true, true, true, true, false, NULL),
('2231fa06-1ba5-43d6-bf2d-ca757368a05a', 'Normatter Mazhinji', '', 4.8, ARRAY['Camps Bay','Sea Point','Green Point','Woodstock','Gardens','V&A Waterfront','Claremont','Newlands','Rondebosch','Observatory'], 'Professional cleaner with 5 years experience. Specializes in eco-friendly cleaning products.', 5, ARRAY['Eco-friendly','Deep cleaning','Airbnb prep'], '+27742649775', '', true, '2025-10-17 19:38:30.924719+00', '2025-12-04 17:32:48.487+00', true, true, true, false, true, true, true, false, NULL),
('2a92664c-7e6c-4cbc-9d1b-6387f1c2b021', 'Beaulla Chemugarira', '', 3.0, ARRAY['Cape Town'], '', 1, ARRAY[]::TEXT[], '+27810768318', 'beaullachemugarira@gmail.com', true, '2025-10-19 12:45:52.990962+00', '2025-10-19 12:45:52.990962+00', true, true, true, true, true, true, true, true, NULL),
('2ba4ac8f-f271-4ce3-9811-58dbca218dc1', 'Magaret Jiri', NULL, 4.9, ARRAY['Fish Hoek','Kalk Bay','Simon''s Town','Kenilworth','Wynberg','Plumstead','Bishopscourt','Tokai','Bergvliet','Diep River'], 'Detail-oriented cleaner with excellent organizational skills. Perfect for busy households.', 1, ARRAY['Organizing','Deep cleaning','Regular maintenance'], '+27658193061', NULL, true, '2025-10-17 19:38:30.924719+00', '2025-12-07 03:29:48.801+00', true, false, true, false, true, false, true, true, NULL),
('45427254-968d-4115-9285-b5f1b03010eb', 'Princess Saidi', '', 5.0, ARRAY['Seapoint','Capetown','Rosebank','Rondebocsh','Claremont','Newlands'], 'My name is Princess Saidi, a professional cleaner from Zimbabwe with five years of experience. As an English speaker, I specialize in delivering exceptional cleaning services with meticulous attention to detail. I am committed to maintaining high hygiene standards and ensuring client satisfaction through reliable and friendly service.', 5, ARRAY[]::TEXT[], '+27738111327', '', true, '2025-11-07 18:25:30.82194+00', '2025-11-07 18:25:30.82194+00', true, true, true, true, true, true, true, true, NULL),
('53f7c0c0-684a-4cbe-aeec-8aa9758940c3', 'Nicole James', '', 4.8, ARRAY['Gardens','V&A Waterfront','Claremont','Newlands','Rondebosch','Observatory','Muizenberg','Constantia','Hout Bay','Clifton'], 'Premium cleaning service provider. Available across major cities with high-end service.', 1, ARRAY['Premium cleaning','Eco-friendly','Commercial','Residential'], '+27694069060', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, false, false, false, false, true, false, false, NULL),
('555cf8fc-9669-4d86-8857-570fc667e3f0', 'Emarald Nyamoto', '', 4.6, ARRAY['Plumstead','Claremont','Kenilworth','Fishhoek','Heatfiled','Muizernberg','Wynberg','Begivliet','Deipriver','Lakeside','Westlake','Tokai'], 'Professional cleaner specializing in commercial and residential spaces.', 1, ARRAY['Commercial cleaning','Residential','Carpet cleaning'], '+27719382131', '', true, '2025-10-16 22:22:13.815891+00', '2025-10-16 22:22:13.815891+00', true, true, true, true, true, false, true, false, NULL),
('5d31128f-8508-40e7-b63f-b37ccb166cdf', 'Sinikiwe Murire', NULL, 5.0, ARRAY['Claremont'], NULL, NULL, NULL, '+27843640805', NULL, true, '2025-12-05 01:56:05.84902+00', '2025-12-05 01:56:05.84902+00', true, true, true, true, true, true, true, true, NULL),
('6fd4f144-92a8-44fd-bcd6-64005a5d0ba6', 'Chrissy Roman', NULL, 5.0, ARRAY['Capetown'], NULL, NULL, NULL, '+27752175328', 'jagadrey@gmail.com', true, '2025-12-05 02:04:43.018937+00', '2025-12-08 18:14:04.362+00', true, true, true, true, true, true, true, true, NULL),
('72642f1a-4745-47e1-9a13-1edbb19b20d0', 'Lucia Chiuta', '', 4.6, ARRAY['Bishopscourt','Tokai','Bergvliet','Diep River','Lakeside','Noordhoek','Kommetjie','Scarborough','Camps Bay','Sea Point'], 'Professional cleaner specializing in commercial and residential spaces.', 1, ARRAY['Commercial cleaning','Residential','Carpet cleaning'], '+27785567309', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', false, true, true, false, true, false, false, false, NULL),
('74ddb79f-8cdc-4483-954a-1e6d5ab562eb', 'Ruvarashe Pazvakavambwa', '', 4.7, ARRAY['Bellville','Parow','Somerset West','Strand','Fish Hoek','Kalk Bay','Simon''s Town','Kenilworth','Wynberg','Plumstead'], 'Reliable and thorough cleaner. Perfect for regular maintenance and special occasions.', 1, ARRAY['Regular cleaning','Deep cleaning','Window cleaning'], '+27627958190', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, true, true, true, true, true, true, NULL),
('7590892c-6177-4efe-8c5f-7263b7bf19cd', 'Tsungaimunashe Mbera', '', 4.9, ARRAY['Muizenberg','Retreat','Begviliet','Deipriver','Heathfield','Wynberg','Kenilworth','Claremont','Westlake','Lakeside'], 'Detail-oriented cleaner with excellent organizational skills. Perfect for busy households.', 1, ARRAY['Organizing','Deep cleaning','Regular maintenance'], '+27699192765', '', true, '2025-10-16 22:22:13.815891+00', '2025-10-16 22:22:13.815891+00', true, true, true, true, true, true, true, true, NULL),
('796e3ad7-07f3-44eb-b4cf-bed439a59f8b', 'Nyasha Mudani', '', 4.6, ARRAY['Simon''s Town','Kenilworth','Wynberg','Plumstead','Bishopscourt','Tokai','Bergvliet','Diep River','Lakeside','Noordhoek'], 'Professional cleaner with focus on customer satisfaction and quality results.', 4, ARRAY['Quality cleaning','Customer service','Regular maintenance'], '+27697567515', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, false, false, true, false, false, false, NULL),
('869b80b9-00e2-4b34-9e42-7b87d42b4aac', 'Mary Mugari', NULL, 4.7, ARRAY['Table View','Parklands','Cape Town','Sea Point','Century City','Blouberg','Brooklyn'], 'Professional cleaner with extensive experience in coastal properties.', 1, ARRAY['Coastal cleaning','Regular maintenance','Deep cleaning'], '+27814857486', NULL, false, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', false, false, true, true, true, false, true, false, NULL),
('8aabdbfb-1428-44d5-8ff9-7661a0b355aa', 'Shyleen Pfende', '', 4.9, ARRAY['Bergvliet','Diep River','Lakeside','Noordhoek','Kommetjie','Westlake','Plumstead','Fishhoek','Wynberg','Claremont','Rondebosch','Muizenberg','Kalkbay','Tokai'], 'Reliable and efficient cleaner. Specializes in move-in/out and Airbnb preparation.', 1, ARRAY['Move-in/out','Airbnb prep','Deep cleaning'], '+27641940583', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, false, false, true, false, true, false, NULL),
('91068f7f-bb91-476f-ad73-ddfe376d5e4c', 'Jacqueline Maphosa', '', 4.8, ARRAY['Wynberg','Claremont','Diepriver','Muizenberg','Lansdowne','Steernberg','Plumstead','Ottery','Kenilworth','Constantia','Retreat'], 'Experienced cleaner with a focus on customer satisfaction and quality work.', 1, ARRAY['Move-in/out','Post-renovation','Eco-friendly'], '+27693893953', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, true, true, true, true, true, true, NULL),
('914b3acf-40e8-4ad5-a5a2-9e2de711849a', 'Ethel Chizombe', '', 4.8, ARRAY['Claremont','Newlands','Rondebosch','Observatory','Muizenberg','Constantia','Hout Bay','Clifton','Bantry Bay','Tamboerskloof'], 'Professional cleaner with great attention to detail. Reliable and punctual service.', 1, ARRAY['Regular cleaning','Move-in/out','Post-construction'], '+27743214943', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, false, true, false, false, false, false, false, NULL),
('ac73ea99-48b3-4c30-9d6b-5a8beab40f33', 'Mavis Thandeka Gurajena', '', 4.9, ARRAY['Green Point','Woodstock','Gardens','V&A Waterfront','Claremont','Newlands','Rondebosch','Observatory','Muizenberg','Constantia'], 'Detail-oriented cleaner with excellent customer reviews. Great with Airbnb properties.', 1, ARRAY['Airbnb cleaning','Deep cleaning','Organizing'], '+27629474955', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, true, true, true, false, true, true, NULL),
('b748ccf2-983e-43aa-9ab2-7ff27882fbe4', 'Primrose Chinohamba', '', 4.8, ARRAY['Cape Town','Camps Bay','Sea Point'], 'Professional cleaner with 5 years experience. Specializes in eco-friendly cleaning products.', 1, ARRAY['Eco-friendly','Deep cleaning','Airbnb prep'], '+27815404023', '', true, '2025-10-16 22:22:13.815891+00', '2025-10-16 22:22:13.815891+00', true, false, true, true, true, false, true, true, NULL),
('c0771cf5-3a83-4299-99ee-b0e399e8745f', 'Mitchell Piyo', '', 4.9, ARRAY['City Bowl','Table View','Bloubergstrand','Milnerton','Bellville','Parow','Somerset West','Strand','Fish Hoek','Kalk Bay'], 'Experienced cleaner with excellent customer service. Specializes in residential properties.', 1, ARRAY['Residential cleaning','Deep cleaning','Regular maintenance'], '+27607222189', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, false, true, true, true, true, true, NULL),
('d8a75570-4b3f-44bc-848a-ad9f33857c91', 'Estery Phiri', '', 4.6, ARRAY['Muizenberg','Constantia','Hout Bay','Clifton','Bantry Bay','Tamboerskloof','City Bowl','St James','Kalk Bay','Lakeside','False Bay','Woodstock','Rondebosch','Rosebank','Mowbary','Observatory','Cape Town','Green Point'], 'Professional cleaner with focus on eco-friendly products and sustainable cleaning methods.', 1, ARRAY['Eco-friendly','Sustainable cleaning','Regular maintenance'], '+27691445709', '', true, '2025-10-17 19:38:30.924719+00', '2025-10-17 19:38:30.924719+00', true, true, true, true, true, true, true, true, NULL),
('e7e2e61a-608d-4fc7-b7d7-865988039d4a', 'Rutendo Shamba', '', 4.9, ARRAY['Century City','Bothasig','Parklands','Richwood','Milnerton','Sundown','Burgundy Estate','Blouberg','Sunningdale','bigbay'], 'Experienced cleaner who takes pride in attention to detail. Great with move-in/out cleaning.', 1, ARRAY['Move-in/out','Office cleaning','Post-construction'], '+27842676534', '', true, '2025-10-16 22:22:13.815891+00', '2025-12-22 11:25:33.995+00', true, false, false, false, false, false, true, true, NULL),
('f781f062-dbed-4a33-84eb-f3bef3493063', 'Marvellous Muneri', NULL, 5.0, ARRAY['Capetown'], NULL, NULL, NULL, '+27603634903', NULL, true, '2025-12-04 19:58:11.739+00', '2025-12-04 19:58:11.739+00', true, true, true, true, true, true, true, true, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  photo_url = EXCLUDED.photo_url,
  rating = EXCLUDED.rating,
  areas = EXCLUDED.areas,
  bio = EXCLUDED.bio,
  years_experience = EXCLUDED.years_experience,
  specialties = EXCLUDED.specialties,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  is_active = EXCLUDED.is_active,
  is_available = EXCLUDED.is_available,
  available_monday = EXCLUDED.available_monday,
  available_tuesday = EXCLUDED.available_tuesday,
  available_wednesday = EXCLUDED.available_wednesday,
  available_thursday = EXCLUDED.available_thursday,
  available_friday = EXCLUDED.available_friday,
  available_saturday = EXCLUDED.available_saturday,
  available_sunday = EXCLUDED.available_sunday,
  updated_at = NOW();

-- Update avatar_url from photo_url if avatar_url column exists and is empty
-- This handles the mapping from photo_url to avatar_url
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'cleaners' AND column_name = 'avatar_url'
  ) THEN
    UPDATE cleaners 
    SET avatar_url = photo_url 
    WHERE (avatar_url IS NULL OR avatar_url = '') 
      AND photo_url IS NOT NULL 
      AND photo_url != '';
  END IF;
END $$;

