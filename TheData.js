const TheData = [
    { id: 1, type: "Car", brand: "Tesla", model: "Model 3", year: 2022, fuel: "Electric", engineOrBattery: "75 kWh", price: 45000 },
    { id: 2, type: "Bike", brand: "Yamaha", model: "R15", year: 2021, fuel: "Petrol", engineOrBattery: "155 cc", price: 1800 },
    { id: 3, type: "Car", brand: "BMW", model: "X1", year: 2020, fuel: "Diesel", engineOrBattery: "1995 cc", price: 41000 },
    { id: 4, type: "Bike", brand: "KTM", model: "Duke 390", year: 2022, fuel: "Petrol", engineOrBattery: "373 cc", price: 3200 },
    { id: 5, type: "Car", brand: "Audi", model: "A4", year: 2019, fuel: "Petrol", engineOrBattery: "1984 cc", price: 38000 },
    { id: 6, type: "Bike", brand: "Royal Enfield", model: "Classic 350", year: 2023, fuel: "Petrol", engineOrBattery: "349 cc", price: 2100 },
    { id: 7, type: "Car", brand: "Toyota", model: "Fortuner", year: 2021, fuel: "Diesel", engineOrBattery: "2755 cc", price: 48000 },
    { id: 8, type: "Bike", brand: "Honda", model: "CBR 650R", year: 2020, fuel: "Petrol", engineOrBattery: "649 cc", price: 9000 },
    { id: 9, type: "Car", brand: "Hyundai", model: "Creta", year: 2023, fuel: "Petrol", engineOrBattery: "1497 cc", price: 24000 },
    { id: 10, type: "Bike", brand: "Suzuki", model: "Gixxer SF", year: 2022, fuel: "Petrol", engineOrBattery: "250 cc", price: 2500 },
    { id: 11, type: "Car", brand: "Kia", model: "Seltos", year: 2022, fuel: "Petrol", engineOrBattery: "1497 cc", price: 23000 },
    { id: 12, type: "Bike", brand: "Bajaj", model: "Pulsar NS200", year: 2021, fuel: "Petrol", engineOrBattery: "199 cc", price: 1600 },
    { id: 13, type: "Car", brand: "Mercedes", model: "C-Class", year: 2020, fuel: "Petrol", engineOrBattery: "1991 cc", price: 52000 },
    { id: 14, type: "Bike", brand: "TVS", model: "RTR 160", year: 2023, fuel: "Petrol", engineOrBattery: "160 cc", price: 1400 },
    { id: 15, type: "Car", brand: "Honda", model: "City", year: 2019, fuel: "Petrol", engineOrBattery: "1498 cc", price: 20000 },
    { id: 16, type: "Bike", brand: "Hero", model: "Xpulse 200", year: 2022, fuel: "Petrol", engineOrBattery: "199 cc", price: 1700 },
    { id: 17, type: "Car", brand: "Skoda", model: "Octavia", year: 2021, fuel: "Petrol", engineOrBattery: "1984 cc", price: 36000 },
    { id: 18, type: "Bike", brand: "Kawasaki", model: "Ninja 650", year: 2020, fuel: "Petrol", engineOrBattery: "649 cc", price: 7800 },
    { id: 19, type: "Car", brand: "Volkswagen", model: "Virtus", year: 2023, fuel: "Petrol", engineOrBattery: "1498 cc", price: 21000 },
    { id: 20, type: "Bike", brand: "BMW", model: "G310R", year: 2021, fuel: "Petrol", engineOrBattery: "313 cc", price: 3500 },
    { id: 21, type: "Car", brand: "Tata", model: "Harrier", year: 2022, fuel: "Diesel", engineOrBattery: "1956 cc", price: 30000 },
    { id: 22, type: "Bike", brand: "Royal Enfield", model: "Meteor 350", year: 2023, fuel: "Petrol", engineOrBattery: "349 cc", price: 2200 },
    { id: 23, type: "Car", brand: "Mahindra", model: "XUV700", year: 2023, fuel: "Diesel", engineOrBattery: "2198 cc", price: 35000 },
    { id: 24, type: "Bike", brand: "Yamaha", model: "MT-15", year: 2022, fuel: "Petrol", engineOrBattery: "155 cc", price: 1700 },
    { id: 25, type: "Car", brand: "MG", model: "ZS EV", year: 2021, fuel: "Electric", engineOrBattery: "50.3 kWh", price: 42000 },
    { id: 26, type: "Bike", brand: "Ola", model: "S1 Pro", year: 2023, fuel: "Electric", engineOrBattery: "4 kWh", price: 1600 },
    { id: 27, type: "Car", brand: "Nissan", model: "Magnite", year: 2022, fuel: "Petrol", engineOrBattery: "999 cc", price: 15000 },
    { id: 28, type: "Bike", brand: "Ather", model: "450X", year: 2023, fuel: "Electric", engineOrBattery: "3.7 kWh", price: 1800 },
    { id: 29, type: "Car", brand: "Renault", model: "Kiger", year: 2021, fuel: "Petrol", engineOrBattery: "999 cc", price: 14000 },
    { id: 30, type: "Bike", brand: "TVS", model: "Ronin", year: 2022, fuel: "Petrol", engineOrBattery: "225 cc", price: 1900 },
    { id: 31, type: "Car", brand: "Jeep", model: "Compass", year: 2020, fuel: "Diesel", engineOrBattery: "1956 cc", price: 33000 },
    { id: 32, type: "Bike", brand: "Honda", model: "Hornet 2.0", year: 2021, fuel: "Petrol", engineOrBattery: "184 cc", price: 1500 },
    { id: 33, type: "Car", brand: "Ford", model: "EcoSport", year: 2019, fuel: "Petrol", engineOrBattery: "1497 cc", price: 19000 },
    { id: 34, type: "Bike", brand: "Bajaj", model: "Dominar 400", year: 2022, fuel: "Petrol", engineOrBattery: "373 cc", price: 3000 },
    { id: 35, type: "Car", brand: "Maruti", model: "Brezza", year: 2023, fuel: "Petrol", engineOrBattery: "1462 cc", price: 18000 },
    { id: 36, type: "Bike", brand: "Suzuki", model: "V-Strom SX", year: 2022, fuel: "Petrol", engineOrBattery: "249 cc", price: 2600 },
    { id: 37, type: "Car", brand: "Volvo", model: "XC40", year: 2021, fuel: "Electric", engineOrBattery: "78 kWh", price: 56000 },
    { id: 38, type: "Bike", brand: "KTM", model: "RC 200", year: 2021, fuel: "Petrol", engineOrBattery: "199 cc", price: 2500 },
    { id: 39, type: "Car", brand: "Hyundai", model: "Verna", year: 2022, fuel: "Petrol", engineOrBattery: "1497 cc", price: 22000 },
    { id: 40, type: "Bike", brand: "Hero", model: "Splendor Plus", year: 2023, fuel: "Petrol", engineOrBattery: "97 cc", price: 900 },
    { id: 41, type: "Car", brand: "Skoda", model: "Kushaq", year: 2023, fuel: "Petrol", engineOrBattery: "1498 cc", price: 24000 },
    { id: 42, type: "Bike", brand: "Royal Enfield", model: "gt 650", year: 2022, fuel: "Petrol", engineOrBattery: "648 cc", price: 3500 },
    { id: 43, type: "Car", brand: "Tata", model: "Nexon EV", year: 2022, fuel: "Electric", engineOrBattery: "40.5 kWh", price: 32000 },
    { id: 44, type: "Bike", brand: "Yamaha", model: "FZ-X", year: 2021, fuel: "Petrol", engineOrBattery: "149 cc", price: 1400 },
    { id: 45, type: "Car", brand: "Mahindra", model: "Thar", year: 2021, fuel: "Diesel", engineOrBattery: "2184 cc", price: 28000 },
    { id: 46, type: "Bike", brand: "Honda", model: "Activa 6G", year: 2023, fuel: "Petrol", engineOrBattery: "109 cc", price: 900 },
    { id: 47, type: "Car", brand: "MG", model: "Hector", year: 2020, fuel: "Petrol", engineOrBattery: "1451 cc", price: 27000 },
    { id: 48, type: "Bike", brand: "Ola", model: "S1 Air", year: 2023, fuel: "Electric", engineOrBattery: "3 kWh", price: 1300 },
    { id: 49, type: "Car", brand: "Maruti", model: "Swift", year: 2022, fuel: "Petrol", engineOrBattery: "1197 cc", price: 14000 },
    { id: 50, type: "Bike", brand: "TVS", model: "Jupiter", year: 2022, fuel: "Petrol", engineOrBattery: "110 cc", price: 950 },

    { id: 51, type: "Car", brand: "Hyundai", model: "i20", year: 2021, fuel: "Petrol", engineOrBattery: "1197 cc", price: 16000 },
    { id: 52, type: "Bike", brand: "Bajaj", model: "CT 125X", year: 2022, fuel: "Petrol", engineOrBattery: "124 cc", price: 900 },
    { id: 53, type: "Car", brand: "Toyota", model: "Innova Crysta", year: 2020, fuel: "Diesel", engineOrBattery: "2393 cc", price: 42000 },
    { id: 54, type: "Bike", brand: "Hero", model: "Glamour", year: 2023, fuel: "Petrol", engineOrBattery: "124 cc", price: 1000 },
    { id: 55, type: "Car", brand: "Honda", model: "Amaze", year: 2022, fuel: "Petrol", engineOrBattery: "1199 cc", price: 14000 },
    { id: 56, type: "Bike", brand: "TVS", model: "Raider 125", year: 2023, fuel: "Petrol", engineOrBattery: "124 cc", price: 1100 },
    { id: 57, type: "Car", brand: "Maruti", model: "Baleno", year: 2023, fuel: "Petrol", engineOrBattery: "1197 cc", price: 15000 },
    { id: 58, type: "Bike", brand: "Yamaha", model: "Ray ZR", year: 2022, fuel: "Petrol", engineOrBattery: "125 cc", price: 950 },
    { id: 59, type: "Car", brand: "Tata", model: "Punch", year: 2022, fuel: "Petrol", engineOrBattery: "1199 cc", price: 13000 },
    { id: 60, type: "Bike", brand: "Honda", model: "Shine", year: 2021, fuel: "Petrol", engineOrBattery: "124 cc", price: 900 },
    { id: 61, type: "Car", brand: "Kia", model: "Carens", year: 2023, fuel: "Diesel", engineOrBattery: "1493 cc", price: 26000 },
    { id: 62, type: "Bike", brand: "Suzuki", model: "Access 125", year: 2023, fuel: "Petrol", engineOrBattery: "124 cc", price: 1000 },
    { id: 63, type: "Car", brand: "Skoda", model: "Slavia", year: 2022, fuel: "Petrol", engineOrBattery: "1498 cc", price: 23000 },
    { id: 64, type: "Bike", brand: "Bajaj", model: "Avenger 220", year: 2021, fuel: "Petrol", engineOrBattery: "220 cc", price: 1800 },
    { id: 65, type: "Car", brand: "Volkswagen", model: "Taigun", year: 2023, fuel: "Petrol", engineOrBattery: "1498 cc", price: 24000 },
    { id: 66, type: "Bike", brand: "Royal Enfield", model: "Hunter 350", year: 2023, fuel: "Petrol", engineOrBattery: "349 cc", price: 2000 },
    { id: 67, type: "Car", brand: "Mahindra", model: "Bolero Neo", year: 2022, fuel: "Diesel", engineOrBattery: "1493 cc", price: 17000 },
    { id: 68, type: "Bike", brand: "Hero", model: "HF Deluxe", year: 2023, fuel: "Petrol", engineOrBattery: "97 cc", price: 800 },
    { id: 69, type: "Car", brand: "Renault", model: "Triber", year: 2021, fuel: "Petrol", engineOrBattery: "999 cc", price: 12000 },
    { id: 70, type: "Bike", brand: "TVS", model: "Scooty Pep+", year: 2022, fuel: "Petrol", engineOrBattery: "87 cc", price: 750 },
    { id: 71, type: "Car", brand: "MG", model: "Astor", year: 2022, fuel: "Petrol", engineOrBattery: "1349 cc", price: 22000 },
    { id: 72, type: "Bike", brand: "Yamaha", model: "Aerox 155", year: 2023, fuel: "Petrol", engineOrBattery: "155 cc", price: 1800 },
    { id: 73, type: "Car", brand: "Jeep", model: "Meridian", year: 2023, fuel: "Diesel", engineOrBattery: "1956 cc", price: 38000 },
    { id: 74, type: "Bike", brand: "Kawasaki", model: "Z900", year: 2022, fuel: "Petrol", engineOrBattery: "948 cc", price: 11000 },
    { id: 75, type: "Car", brand: "Toyota", model: "Urban Cruiser", year: 2023, fuel: "Hybrid", engineOrBattery: "1490 cc", price: 28000 },
    { id: 76, type: "Bike", brand: "Honda", model: "Hness CB350", year: 2022, fuel: "Petrol", engineOrBattery: "348 cc", price: 2300 },
    { id: 77, type: "Car", brand: "Citroen", model: "C3", year: 2022, fuel: "Petrol", engineOrBattery: "1198 cc", price: 11000 },
    { id: 78, type: "Bike", brand: "BMW", model: "R1250 GS", year: 2021, fuel: "Petrol", engineOrBattery: "1254 cc", price: 18000 },
    { id: 79, type: "Car", brand: "Maruti", model: "Ertiga", year: 2023, fuel: "Petrol", engineOrBattery: "1462 cc", price: 19000 },
    { id: 80, type: "Bike", brand: "KTM", model: "Adventure 390", year: 2022, fuel: "Petrol", engineOrBattery: "373 cc", price: 4200 },
    { id: 81, type: "Car", brand: "Hyundai", model: "Alcazar", year: 2022, fuel: "Diesel", engineOrBattery: "1493 cc", price: 29000 },
    { id: 82, type: "Bike", brand: "Royal Enfield", model: "Bullet 350", year: 2021, fuel: "Petrol", engineOrBattery: "346 cc", price: 1900 },
    { id: 83, type: "Car", brand: "Tata", model: "Safari", year: 2023, fuel: "Diesel", engineOrBattery: "1956 cc", price: 34000 },
    { id: 84, type: "Bike", brand: "Hero", model: "Karizma XMR", year: 2023, fuel: "Petrol", engineOrBattery: "210 cc", price: 2000 },
    { id: 85, type: "Car", brand: "Mahindra", model: "Scorpio N", year: 2023, fuel: "Diesel", engineOrBattery: "2198 cc", price: 36000 },
    { id: 86, type: "Bike", brand: "TVS", model: "Apache RR 310", year: 2022, fuel: "Petrol", engineOrBattery: "312 cc", price: 3900 },
    { id: 87, type: "Car", brand: "Lexus", model: "ES 300h", year: 2021, fuel: "Hybrid", engineOrBattery: "2487 cc", price: 62000 },
    { id: 88, type: "Bike", brand: "Suzuki", model: "Hayabusa", year: 2022, fuel: "Petrol", engineOrBattery: "1340 cc", price: 16000 },
    { id: 89, type: "Car", brand: "BYD", model: "Atto 3", year: 2023, fuel: "Electric", engineOrBattery: "60.5 kWh", price: 45000 },
    { id: 90, type: "Bike", brand: "Ola", model: "Roadster", year: 2024, fuel: "Electric", engineOrBattery: "4.5 kWh", price: 2000 },
    { id: 91, type: "Car", brand: "Audi", model: "Q3", year: 2022, fuel: "Petrol", engineOrBattery: "1984 cc", price: 51000 },
    { id: 92, type: "Bike", brand: "Ather", model: "450S", year: 2023, fuel: "Electric", engineOrBattery: "3.7 kWh", price: 1500 },
    { id: 93, type: "Car", brand: "BMW", model: "330i", year: 2021, fuel: "Petrol", engineOrBattery: "1998 cc", price: 58000 },
    { id: 94, type: "Bike", brand: "Kawasaki", model: "Versys 650", year: 2022, fuel: "Petrol", engineOrBattery: "649 cc", price: 9000 },
    { id: 95, type: "Car", brand: "Mercedes", model: "GLA", year: 2023, fuel: "Petrol", engineOrBattery: "1332 cc", price: 54000 },
    { id: 96, type: "Bike", brand: "Honda", model: "Gold Wing", year: 2021, fuel: "Petrol", engineOrBattery: "1833 cc", price: 28000 },
    { id: 97, type: "Car", brand: "Porsche", model: "Macan", year: 2022, fuel: "Petrol", engineOrBattery: "1984 cc", price: 78000 },
    { id: 98, type: "Bike", brand: "Ducati", model: "Panigale V4", year: 2023, fuel: "Petrol", engineOrBattery: "1103 cc", price: 26000 },
    { id: 99, type: "Car", brand: "Land Rover", model: "Defender", year: 2021, fuel: "Diesel", engineOrBattery: "1997 cc", price: 82000 },
    { id: 100, type: "Bike", brand: "Triumph", model: "Street Triple RS", year: 2023, fuel: "Petrol", engineOrBattery: "765 cc", price: 12000 },

    // { id: 101, type: "Bike", brand: "Yamaha", model: "MT-15", year: 2022, fuel: "Petrol", engineOrBattery: "155 cc", price: 1600 },
    // { id: 102, type: "Bike", brand: "KTM", model: "Duke 390", year: 2023, fuel: "Petrol", engineOrBattery: "373 cc", price: 3500 },
    // { id: 103, type: "Bike", brand: "Royal Enfield", model: "Interceptor 650", year: 2022, fuel: "Petrol", engineOrBattery: "648 cc", price: 3000 },
    // { id: 104, type: "Bike", brand: "BMW", model: "G 310 R", year: 2021, fuel: "Petrol", engineOrBattery: "313 cc", price: 2900 },
    // { id: 105, type: "Bike", brand: "Honda", model: "CBR 650R", year: 2023, fuel: "Petrol", engineOrBattery: "649 cc", price: 9000 },
    // { id: 106, type: "Car", brand: "Toyota", model: "Corolla", year: 2021, fuel: "Petrol", engineOrBattery: "1.8 L", price: 20000 },
    // { id: 107, type: "Car", brand: "Honda", model: "Civic", year: 2022, fuel: "Petrol", engineOrBattery: "1.5 L", price: 23000 },
    // { id: 108, type: "Car", brand: "Hyundai", model: "Verna", year: 2023, fuel: "Petrol", engineOrBattery: "1.5 L", price: 18000 },
    // { id: 109, type: "Car", brand: "Skoda", model: "Octavia", year: 2022, fuel: "Petrol", engineOrBattery: "2.0 L", price: 32000 },
    // { id: 110, type: "Car", brand: "Volkswagen", model: "Virtus", year: 2023, fuel: "Petrol", engineOrBattery: "1.5 L", price: 21000 },
    // { id: 111, type: "Bike", brand: "Suzuki", model: "Hayabusa", year: 2022, fuel: "Petrol", engineOrBattery: "1340 cc", price: 16000 },
    // { id: 112, type: "Bike", brand: "Kawasaki", model: "Ninja 650", year: 2023, fuel: "Petrol", engineOrBattery: "649 cc", price: 8000 },
    // { id: 113, type: "Bike", brand: "Ducati", model: "Monster", year: 2022, fuel: "Petrol", engineOrBattery: "937 cc", price: 14000 },
    // { id: 114, type: "Bike", brand: "Aprilia", model: "RS 457", year: 2024, fuel: "Petrol", engineOrBattery: "457 cc", price: 4200 },
    // { id: 115, type: "Bike", brand: "TVS", model: "Apache RR 310", year: 2023, fuel: "Petrol", engineOrBattery: "312 cc", price: 3200 },
    // { id: 116, type: "Car", brand: "BMW", model: "330i", year: 2022, fuel: "Petrol", engineOrBattery: "2.0 L", price: 48000 },
    // { id: 117, type: "Car", brand: "Mercedes", model: "C-Class", year: 2023, fuel: "Petrol", engineOrBattery: "2.0 L", price: 52000 },
    // { id: 118, type: "Car", brand: "Audi", model: "A4", year: 2022, fuel: "Petrol", engineOrBattery: "2.0 L", price: 50000 },
    // { id: 119, type: "Car", brand: "Tesla", model: "Model 3", year: 2023, fuel: "Electric", engineOrBattery: "60 kWh", price: 55000 },
    // { id: 120, type: "Car", brand: "MG", model: "ZS EV", year: 2022, fuel: "Electric", engineOrBattery: "50.3 kWh", price: 30000 },
    // { id: 121, type: "Bike", brand: "Hero", model: "Xpulse 200", year: 2022, fuel: "Petrol", engineOrBattery: "199 cc", price: 1500 },
    // { id: 122, type: "Bike", brand: "Bajaj", model: "Dominar 400", year: 2023, fuel: "Petrol", engineOrBattery: "373 cc", price: 2800 },
    // { id: 123, type: "Bike", brand: "Honda", model: "Hornet 2.0", year: 2022, fuel: "Petrol", engineOrBattery: "184 cc", price: 1700 },
    // { id: 124, type: "Bike", brand: "Yamaha", model: "R15 V4", year: 2023, fuel: "Petrol", engineOrBattery: "155 cc", price: 1900 },
    // { id: 125, type: "Bike", brand: "Royal Enfield", model: "Himalayan 450", year: 2024, fuel: "Petrol", engineOrBattery: "452 cc", price: 3500 },
    // { id: 126, type: "Car", brand: "Tata", model: "Nexon", year: 2023, fuel: "Petrol", engineOrBattery: "1.2 L", price: 15000 },
    // { id: 127, type: "Car", brand: "Mahindra", model: "XUV700", year: 2022, fuel: "Diesel", engineOrBattery: "2.2 L", price: 28000 },
    // { id: 128, type: "Car", brand: "Kia", model: "Seltos", year: 2023, fuel: "Petrol", engineOrBattery: "1.5 L", price: 22000 },
    // { id: 129, type: "Car", brand: "Hyundai", model: "Creta", year: 2022, fuel: "Petrol", engineOrBattery: "1.5 L", price: 21000 },
    // { id: 130, type: "Car", brand: "Toyota", model: "Fortuner", year: 2023, fuel: "Diesel", engineOrBattery: "2.8 L", price: 45000 },
    // { id: 131, type: "Bike", brand: "Kawasaki", model: "Z900", year: 2023, fuel: "Petrol", engineOrBattery: "948 cc", price: 9500 },
    // { id: 132, type: "Bike", brand: "BMW", model: "S 1000 RR", year: 2022, fuel: "Petrol", engineOrBattery: "999 cc", price: 20000 },
    // { id: 133, type: "Bike", brand: "Ducati", model: "Panigale V2", year: 2023, fuel: "Petrol", engineOrBattery: "955 cc", price: 18000 },
    // { id: 134, type: "Bike", brand: "Suzuki", model: "V-Strom 650", year: 2022, fuel: "Petrol", engineOrBattery: "645 cc", price: 8500 },
    // { id: 135, type: "Bike", brand: "Benelli", model: "TRK 502X", year: 2021, fuel: "Petrol", engineOrBattery: "500 cc", price: 6000 },
    // { id: 136, type: "Car", brand: "Skoda", model: "Kushaq", year: 2023, fuel: "Petrol", engineOrBattery: "1.5 L", price: 19000 },
    // { id: 137, type: "Car", brand: "Volkswagen", model: "Taigun", year: 2022, fuel: "Petrol", engineOrBattery: "1.5 L", price: 20000 },
    // { id: 138, type: "Car", brand: "Jeep", model: "Compass", year: 2023, fuel: "Diesel", engineOrBattery: "2.0 L", price: 34000 },
    // { id: 139, type: "Car", brand: "Ford", model: "Mustang", year: 2022, fuel: "Petrol", engineOrBattery: "5.0 L", price: 75000 },
    // { id: 140, type: "Car", brand: "Chevrolet", model: "Camaro", year: 2021, fuel: "Petrol", engineOrBattery: "6.2 L", price: 72000 },
    // { id: 141, type: "Bike", brand: "Harley-Davidson", model: "Iron 883", year: 2021, fuel: "Petrol", engineOrBattery: "883 cc", price: 11000 },
    // { id: 142, type: "Bike", brand: "Jawa", model: "Perak", year: 2022, fuel: "Petrol", engineOrBattery: "334 cc", price: 2200 },
    // { id: 143, type: "Bike", brand: "CFMoto", model: "650 NK", year: 2023, fuel: "Petrol", engineOrBattery: "649 cc", price: 5000 },
    // { id: 144, type: "Bike", brand: "Husqvarna", model: "Svartpilen 401", year: 2023, fuel: "Petrol", engineOrBattery: "373 cc", price: 3000 },
    // { id: 145, type: "Bike", brand: "Moto Guzzi", model: "V7", year: 2022, fuel: "Petrol", engineOrBattery: "853 cc", price: 12000 },
    // { id: 146, type: "Car", brand: "Renault", model: "Kiger", year: 2022, fuel: "Petrol", engineOrBattery: "1.0 L", price: 12000 },
    // { id: 147, type: "Car", brand: "Nissan", model: "Magnite", year: 2023, fuel: "Petrol", engineOrBattery: "1.0 L", price: 11500 },
    // { id: 148, type: "Car", brand: "Citroen", model: "C3", year: 2022, fuel: "Petrol", engineOrBattery: "1.2 L", price: 10000 },
    // { id: 149, type: "Car", brand: "Volvo", model: "XC40", year: 2023, fuel: "Electric", engineOrBattery: "69 kWh", price: 60000 },
    // { id: 150, type: "Car", brand: "BYD", model: "Atto 3", year: 2023, fuel: "Electric", engineOrBattery: "60.5 kWh", price: 42000 }
];

export default TheData



// const InrPrice = item.price * 89.91;
// const Price = (value) => {
//     if (value >= 10000000) {
//         return `${(value / 10000000).toFixed(1)} Cr`;
//     } else if (value >= 100000) {
//         return `${(value / 100000).toFixed(1)} Lac`;
//     } else if (value >= 1000) {
//         return `${(value / 1000).toFixed(1)} K`;
//     } else {
//         return value.toLocaleString('en-IN');
//     }
// }


// const itemsCount = document.getElementById('items-count');
// itemsCount.textContent = `${startIndex + 1} - ${Math.min(endIndex, TheData.length)} of ${TheData.length}`;


// for (let i = 1; i <= AllPages; i++) {
//     buttonHtml += `<button class="page-button" onclick="changePage(${i})" ${i === currentPage ? 'disabled' : ''}>${i}</button>`;
// }



// if (AllPages <= 6) {
//     for (let i = 1; i <= AllPages; i++) {
//         buttonHtml += `<button class="page-button" onclick="changePage(${i})" ${i === currentPage ? 'disabled' : ''}>${i}</button>`;
//     }
// } else {
//     if (currentPage <= 4) {
//         for (let i = 1; i <= 5; i++) {
//             buttonHtml += `<button class="page-button" onclick="changePage(${i})" ${i === currentPage ? 'disabled' : ''}>${i}</button>`;
//         }
//         buttonHtml += `<span class="dots">...</span><button class="page-button" onclick="changePage(${AllPages})">${AllPages}</button>`;
//     } else if (currentPage >= AllPages - 3) {
//         buttonHtml += `<button class="page-button" onclick="changePage(1)">1</button><span class="dots">...</span>`;
//         for (let i = AllPages - 4; i <= AllPages; i++) {
//             buttonHtml += `<button class="page-button" onclick="changePage(${i})" ${i === currentPage ? 'disabled' : ''}>${i}</button>`;
//         }
//     } else {
//         buttonHtml += `<button class="page-button" onclick="changePage(1)">1</button><span class="dots">...</span>`;
//         for (let i = currentPage - 1; i <= currentPage + 1; i++) {
//             buttonHtml += `<button class="page-button" onclick="changePage(${i})" ${i === currentPage ? 'disabled' : ''}>${i}</button>`;
//         }
//         buttonHtml += `<span class="dots">...</span><button class="page-button" onclick="changePage(${AllPages})">${AllPages}</button>`;
//     }
// }



// const updatePagination = () => {
//     const total = Math.ceil(TheData.length / itemsPerPage);

//     const getRange = () => {
//         if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1);
//         if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', total];
//         if (currentPage >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
//         return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', total];
//     };

//     const btn = (content, target, disabled = false, cls = "page-button") =>
//         `<button class="${cls}" onclick="changePage(${target})" ${disabled ? 'disabled' : ''}>${content}</button>`;

//     const pagesHtml = getRange().map(p =>
//         p === '...' ? `<span class="dots">...</span>` : btn(p, p, p === currentPage)
//     ).join('');

//     document.getElementById('pagination').innerHTML =
//         btn('<i class="fa-solid fa-chevron-left"></i>', Math.max(1, currentPage - 1), currentPage === 1, "side-button") +
//         pagesHtml +
//         btn('<i class="fa-solid fa-chevron-right"></i>', Math.min(total, currentPage + 1), currentPage === total, "side-button");
// };

// window.changePage = (num) => {
//     currentPage = num;
//     updatePagination();
// };