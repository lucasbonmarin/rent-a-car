import Golf6 from "../../../assets/images/cars/golf6.jpg";
import AudiA1 from "../../../assets/images/cars/audia1.jpg";
import Toyota from "../../../assets/images/cars/toyotacamry.jpg";
import Bmw320 from "../../../assets/images/cars/bmw320.jpg";
import Benz from "../../../assets/images/cars/benz.jpg";
import Passat from "../../../assets/images/cars/passatcc.jpg";

export type CarDataType = {
    name: string;
    price: string;
    img: string;
    model: string;
    mark: string;
    year: string;
    doors: string;
    ac: string;
    transmission: string;
    fuel: string;
};

export const CAR_DATA: CarDataType[] = [
    {
        name: "Audi A1 S-Line",
        price: "45",
        img: AudiA1,
        model: "A1",
        mark: "Audi",
        year: "2012",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Gasoline"
    },
    {
        name: "VW Golf 6",
        price: "37",
        img: Golf6,
        model: "Golf 6",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        name: "Toyota Camry",
        price: "30",
        img: Toyota,
        model: "Camry",
        mark: "Toyota",
        year: "2006",
        doors: "4/5",
        ac: "Yes",
        transmission: "Automatic",
        fuel: "Hybrid"
    },
    {
        name: "BMW 320 ModernLine",
        price: "35",
        img: Bmw320,
        model: "320",
        mark: "BMW",
        year: "2012",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        name: "Mercedes-Benz GLK",
        price: "50",
        img: Benz,
        model: "Benz GLK",
        mark: "Mercedes",
        year: "2006",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        name: "VW Passat CC",
        price: "25",
        img: Passat,
        model: "Passat CC",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        ac: "Yes",
        transmission: "Automatic",
        fuel: "Gasoline"
    }
];