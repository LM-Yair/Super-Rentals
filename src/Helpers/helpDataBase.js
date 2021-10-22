import Grand_Old_Mansion from '../Assets/imgs/Grand_Old_Mansion.jpg';
import Urban_Living from '../Assets/imgs/Urban_Living.jpg';
import Downtown from '../Assets/imgs/Downtown.jpg';
import Hotel_Isabel from '../Assets/imgs/Hotel_Isabel.PNG';
import Hotel_Don_Porfirio from '../Assets/imgs/Hotel_Don_Porfirio.PNG';
import Hotel_Aliz from '../Assets/imgs/Hotel_Aliz.PNG';
import Hotel_Hacienda_Real from '../Assets/imgs/Hotel_Hacienda_Real.PNG';
import Hotel_Castillo from '../Assets/imgs/Hotel_Castillo_Santa_Cecilia.PNG';
import Hotel_Palmareca from '../Assets/imgs/Palmareca.PNG';

const db = [
  {
    id: 1,
    img: Hotel_Isabel,
    placeName: 'Hotel Isabel',
    owner: 'Isabel',
    locationName: 'Miguel Hidalgo 207, Col. Centro, Celaya, Gto.',
    numberOfBedrooms: '18',
    placeType: 'Turístico',
    mapSrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.6772822050907!2d-100.81626593442593!3d20.519451596847333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cba894bbec181%3A0x46b3463cc7c57987!2sHotel%20Isabel!5e0!3m2!1ses-419!2smx!4v1634858109015!5m2!1ses-419!2smx',
  },
  {
    id: 2,
    img: Hotel_Don_Porfirio,
    placeName: 'Hotel Don Porfirio',
    owner: 'Don Porfirio',
    locationName: 'Calle Ignacio Allende 206, Zona Centro, 38160 Apaseo el Grande, Gto.',
    numberOfBedrooms: '16',
    placeType: 'Turístico',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7472.130490106082!2d-100.6854398!3d20.5445112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cb240f0d93d4d%3A0xd9cf0b3ccdfc76fa!2zSG90ZWwg4oCcRG9uIFBvcmZpcmlv4oCd!5e0!3m2!1ses-419!2smx!4v1634866053828!5m2!1ses-419!2smx',
  },
  {
    id: 3,
    img: Hotel_Aliz,
    placeName: 'Hotel Casa Aliz',
    owner: 'Sra Aliz',
    locationName: 'Diez de Sollano y Dávalos 65, Zona Centro, 37700 San Miguel de Allende, Gto.',
    numberOfBedrooms: '22',
    placeType: 'Turístico',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14908.207409259558!2d-100.74934386850764!3d20.91023342516701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2e77b628340e653!2sHotel%20Casa%20Aliz!5e0!3m2!1ses-419!2smx!4v1634866666970!5m2!1ses-419!2smx',
  },
  {
    id: 4,
    img: Hotel_Hacienda_Real,
    placeName: 'Hotel Hacienda Real',
    owner: 'Jessabel',
    locationName: 'Peña de, C. Corregidora #18, La Fuente, 76680 Bernal, Qro.',
    numberOfBedrooms: '15',
    placeType: 'Turístico',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7462.359234606598!2d-99.941943!3d20.7435127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37f1c8376c181%3A0x3cf2eb64e4d3b6cf!2sHotel%20Hacienda%20Real!5e0!3m2!1ses-419!2smx!4v1634867357580!5m2!1ses-419!2smx',
  },
  {
    id: 5,
    img: Hotel_Castillo,
    placeName: 'Hotel Castillo Santa Cecilia',
    owner: 'Yair',
    locationName: 'Camino A La Valenciana Km 01 S/N San Javier Guana, 36020 Guanajuato, Gto.',
    numberOfBedrooms: '35',
    placeType: 'Turístico',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.295918006836!2d-101.25940639999999!3d21.0297257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b73fc74309e7f%3A0x19d0f4825df02d25!2sHotel%20Castillo%20Santa%20Cecilia!5e0!3m2!1ses-419!2smx!4v1634868143325!5m2!1ses-419!2smx',
  },
  {
    id: 6,
    img: Hotel_Palmareca,
    placeName: 'Palmareca Inn-Suites-Studios',
    owner: 'Samanta',
    locationName: 'Blvd. Belisario Domínguez 4120, Jardines de Tuxtla, 29020 Tuxtla Gutiérrez, Chis.',
    numberOfBedrooms: '26',
    placeType: 'Turístico',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30563.22516723649!2d-93.15284500011043!3d16.75660666580706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecdbd87f30035f%3A0x6efeacdadb9242d0!2sPalmareca%20Inn-Suites-Studios%20%22Siempre%20Amables%22!5e0!3m2!1ses-419!2smx!4v1634870035226!5m2!1ses-419!2smx',
  },
  {
    id: 7,
    img: Grand_Old_Mansion,
    placeName: 'Grand Old Mansion',
    owner: 'Veruca Salt',
    locationName: 'San Francisco',
    numberOfBedrooms: '15',
    placeType: 'Stand alone',
  },
  {
    id: 8,
    img: Urban_Living,
    placeName: 'Urban Living',
    owner: 'Mike Teavee',
    locationName: 'Seattle',
    numberOfBedrooms: '1',
    placeType: 'Community',
  },
  {
    id: 9,
    img: Downtown,
    placeName: 'Downtown Charm',
    owner: 'Violet Beauregarde',
    locationName: 'Portland',
    numberOfBedrooms: '3',
    placeType: 'Community',
  },
 ]

export default db;
