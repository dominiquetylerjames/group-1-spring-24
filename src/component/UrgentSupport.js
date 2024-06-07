import PoliceStationsCard from './PoliceStationsCard'
import HelplinesCard from './HelplinesCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UrgentSupport.css'
import WomensAidCard from './WomensAidCard';

function UrgentSupport () {

    const cardiffCentral = {
        name: "Cardiff Central Police Station",
        openingTimes: "9am-5pm, Monday-Sunday",
        address: "King Edward VII Avenue, CF10 3NN"
    }

    const cardiff = {
        name: "Cardiff Police Station",
        openingTimes: "24 hours a day, 7 days a week",
        address: "3 Callaghan Square, CF10 5BT"
    }

    const cardiffBay = {
        name: "Cardiff Bay Police Station",
        openingTimes: "8am-10pm, Monday-Sunday",
        address: "James Street, Cardiff Bay, CF10 5EW"
    }

    const cardiffWomensAid = {
        name: "Cardiff Womens Aid",
        number: "029 2046 0566"
    }

    const liveFearFree = {
        name: "Live Fear Free",
        number: "0808 8010 800"
    }

    const bawso = {
        name: "BAWSO",
        number: "0800 7318 147"
    }

    const shelterCymru = {
        image: "/shelterCymru.png",
        info: "Confidential emergency accomodation for women who have become homeless due to abuse",
        address: "Cardiff Central Library, The Hayes, Cardiff, CF10 1FL",
        helpline: "08000 495 495",
        websiteSource: "https://sheltercymru.org.uk/housing-advice/finding-a-place-to-live/emergency-accommodation/womens-refuge/"
    }

    const riseCardiff = {
        image: "/riseCardiff.png",
        info: "Support regarding domestic abuse, violence and sexual violence, provided at their Resource and Recovery centre",
        address: "RISE One Stop Shop, Cardiff Royal Infirmary, Block 24, Longcross Street, Cardiff, CF24 OJT (open for drop-ins)",
        helpline: "029 2046 0566",
        websiteSource: "https://rise-cardiff.cymru/"
    }

    const cardiffWomensCentre = {
        image: "/cardiffWomensCentre.png",
        info: "Events and safe space meetings including a feminist library, drop-in sessions, group work and counselling",
        address: "Cardiff Women's Centre, 50 Meteor Street, Adamsdown, Cardiff, CF24 0HE",
        helpline: "029 2046 0566",
        websiteSource: "https://cardiffwomenscentre.org.uk/"
    }

    const liveFearFreeWomensAid = {
        image: "/liveFearFree.png",
        info: "Advice and support regarding accomodation, legal advice, finances, health and wellbeing and counselling",
        address: "Cardiff Women's Centre, 50 Meteor Street, Adamsdown, Cardiff, CF24 0HE",
        helpline: "0808 8010 800 or text 0786 0077 333",
        websiteSource: "https://www.gov.wales/live-fear-free"
    }

    const bawsoWomensAid = {
        image: "/bawso.png",
        info: "All forms of support for Black Minority Ethnic and migrant victims, including refuges and safe houses",
        address: "Bawso Main Office, Unit 4 Sovereign Quay, Havannah Street, Cardiff, CF10 5SF",
        helpline: "0800 7318 147",
        websiteSource: "https://bawso.org.uk/en/services/"
    }

    return (
        <div className="urgentSupportPage">

            <p id='intro'>Its important to know that there are emergency services there to help women in need. < br/> Below are helplines, womens aid charities and police stations that you can turn to if you're in need of urgent support.</p>

            <h1>24/7 Helplines</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            <HelplinesCard 
            name={ cardiffWomensAid.name } 
            number={ cardiffWomensAid.number }
            />

            <HelplinesCard 
            name={ liveFearFree.name } 
            number={ liveFearFree.number }
            />

            <HelplinesCard 
            name={ bawso.name } 
            number={ bawso.number }
            />
            </div>

            <h1>Police Stations</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            <PoliceStationsCard 
            name={ cardiffCentral.name } 
            openingTimes={ cardiffCentral.openingTimes }
            address={ cardiffCentral.address }
            />

            <PoliceStationsCard 
            name={ cardiff.name } 
            openingTimes={ cardiff.openingTimes }
            address={ cardiff.address }
            />

            <PoliceStationsCard 
            name={ cardiffBay.name } 
            openingTimes={ cardiffBay.openingTimes }
            address={ cardiffBay.address }
            />
            </div>

            <h1>Women's Aid</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
            <WomensAidCard 
            name={ shelterCymru.name } 
            image= { shelterCymru.image }
            info={ shelterCymru.info }
            address={ shelterCymru.address }
            helpline={ shelterCymru.helpline }
            websiteSource={ shelterCymru.websiteSource }
            websiteAddress={ shelterCymru.websiteAddress }
            />

            <WomensAidCard 
            name={ cardiffWomensCentre.name } 
            image= { cardiffWomensCentre.image }
            info={ cardiffWomensCentre.info }
            address={ cardiffWomensCentre.address }
            helpline={ cardiffWomensCentre.helpline }
            websiteSource={ cardiffWomensCentre.websiteSource }
            websiteAddress={ cardiffWomensCentre.websiteAddress }
            />

            <WomensAidCard 
            name={ riseCardiff.name } 
            image= { riseCardiff.image }
            info={ riseCardiff.info }
            address={ riseCardiff.address }
            helpline={ riseCardiff.helpline }
            websiteSource={ riseCardiff.websiteSource }
            websiteAddress={ riseCardiff.websiteAddress }
            />

            <WomensAidCard 
            name={ bawsoWomensAid.name } 
            image= { bawsoWomensAid.image }
            info={ bawsoWomensAid.info }
            address={ bawsoWomensAid.address }
            helpline={ bawsoWomensAid.helpline }
            websiteSource={ bawsoWomensAid.websiteSource }
            websiteAddress={ bawsoWomensAid.websiteAddress }
            />

            <WomensAidCard 
            name={ liveFearFreeWomensAid.name } 
            image= { liveFearFreeWomensAid.image }
            info={ liveFearFreeWomensAid.info }
            address={ liveFearFreeWomensAid.address }
            helpline={ liveFearFreeWomensAid.helpline }
            websiteSource={ liveFearFreeWomensAid.websiteSource }
            websiteAddress={ liveFearFreeWomensAid.websiteAddress }
            />
            </div>

        </div>
    );
}

export default UrgentSupport;
