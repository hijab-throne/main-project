import {Route, Switch} from 'wouter';
import './App.css';
import Home from './components/Home';
import ChiffonShall180 from "./pages/chiffon/ChiffonShall180.jsx";
import BasicLayout from "./components/shared/BasicLayout.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import WhatsAppWidget from "./components/WhatsAppWidget.jsx";
import ChiffonShall150 from "./pages/chiffon/ChiffonShall150.jsx";
import ChiffonShallGur from "./pages/chiffon/ChiffonShallGur.jsx";
import Jersey180 from "./pages/jersey/Jersey180.jsx";
import Jersey200 from "./pages/jersey/Jersey200.jsx";
import JerseyGur from "./pages/jersey/JerseyGur.jsx";
import JazzShall200 from "./pages/jazz/JazzShall200.jsx";
import ShallKrep from "./pages/jazz/ShallKrep.jsx";
import PolitikatEDhurimit from "./pages/aktivitete/PolitikatEDhurimit.jsx";
import Bamiresite from "./pages/aktivitete/Bamiresite.jsx";
import Sfilatat from "./pages/aktivitete/Sfilatat.jsx";
import Panairet from "./pages/aktivitete/Panairet.jsx";
import FustanNamaziAdults from "./pages/fustan-namazi/FustanNamaziAdults.jsx";
import Saten from "./pages/saten/Saten.jsx";
import FustanNamaziKids from "./pages/fustan-namazi/FustanNamaziKids.jsx";
import Aksesor from "./pages/aksesor/Aksesor.jsx";
import PraktikeNamazOrtusu from "./pages/praktike/PraktikeNamazOrtusu.jsx";
import PraktikePileli from "./pages/praktike/PraktikePileli.jsx";
import PraktikeHazirTurban from "./pages/praktike/PraktikeHazirTurban.jsx";
import PraktikeTesettur from "./pages/praktike/PraktikeTesettur.jsx";
import PraktikeSport from "./pages/praktike/PraktikeSport.jsx";
import PraktikeFemije from "./pages/praktike/PraktikeFemije.jsx";
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import ZharsMeDredha from "./pages/jersey/ZharsMeDredha.jsx";
import PraktikePenye from "./pages/praktike/PraktikePenye.jsx";
import KapucTub from "./pages/kapuc/KapucTub.jsx";
import KapucCeneli from "./pages/kapuc/KapucCeneli.jsx";
import KapucEcardinAspirim from "./pages/kapuc/KapucEcardinAspirim.jsx";
import KapucEcardinClassic from "./pages/kapuc/KapucEcardinClassic.jsx";
import KapucSilikon400 from "./pages/kapuc/KapucSilikon400.jsx";
import KapucSilikon500 from "./pages/kapuc/KapucSilikon500.jsx";
import KapucKlimatik from "./pages/kapuc/KapucKlimatik.jsx";
import KapucSedef from "./pages/kapuc/KapucSedef.jsx";
import KapucTylTjeter from "./pages/kapuc/KapucTylTjeter.jsx";
import KapucTylLehte from "./pages/kapuc/KapucTylLehte.jsx";
import KapucXhElastik from "./pages/kapuc/KapucXhElastik.jsx";
import KapucXhPambuk from "./pages/kapuc/KapucXhPambuk.jsx";
import ShamiShkelqim from "./pages/ShamiShkelqim.jsx";

const navItems = [
  {
    label: 'About Us',
    href: '/about-us',
    isClickable: true,
    Component: AboutUs,
  },
  {
    label: 'Chiffon',
    href: '/chiffon',
    isClickable: false,
    dropdown: [
      {label: 'Shall 180:70 cm', href: '/chiffon/shall-ch-180'},
      {label: 'Shami 150:150 cm', href: '/chiffon/shami-ch-150'},
      {label: 'Shall me gur 180:70 cm', href: '/chiffon/shall-ch-gur'},
    ],
  },
  {
    label: 'Jersey',
    href: '/jersey',
    isClickable: false,
    dropdown: [
      {label: 'Shall 180:70 cm', href: '/jersey/shall-jr-180'},
      {label: 'Shami 200:100 cm', href: '/jersey/shami-jr-200'},
      {label: 'Shall me gur 180:70 cm', href: '/jersey/shall-jr-gur'},
      {label: 'Zhars me dredha', href: '/jersey/dredha'},
    ],
  },
  {
    label: 'Jazz',
    href: '/jazz',
    isClickable: false,
    dropdown: [
      {label: 'Shall 200:70 cm', href: '/jazz/shall-jazz-200'},
      {label: 'Shall krep', href: '/jazz/shall-krep'},
    ],
  },
  {
    label: 'Saten',
    href: '/saten',
    Component: Saten,
    isClickable: true,
  },
    {
    label: 'Underscarf',
    href: '/kapuc',
    isClickable: false,
    dropdown: [
      {label: 'Kapuc tub', href: '/kapuc/tub'},
      {label: 'Kapuc me aspirim (klimatik)', href: '/kapuc/klimatik'},
      {
        label: 'Kapuc me silikon (kaymaz)',
        subdropdown: [
          {label: 'Kapuc me silikon 400', href: '/kapuc/silikon400'},
          {label: 'Kapuc me silikon 500', href: '/kapuc/silikon500'},
        ]
      },
      {
        label: 'Kapuc xhufke',
        subdropdown: [
          {label: 'Kapuc me pambuk lidhese xhufke', href: '/kapuc/pambuk'},
          {label: 'Kapuc elastik xhufke', href: '/kapuc/elastik'},
        ]
      },
      {label: 'Kapuc tyl', href: '/kapuc/tyl-i-lehte'},
      {label: 'Kapuc ceneli', href: '/kapuc/ceneli'},
      {label: 'Ninxha pambuk sedef', href: '/kapuc/sedef'},
      {label: 'Ninxha climatic ecardin', href: '/kapuc/aspirim'},
      {label: 'Ninxha classic ecardin', href: '/kapuc/classic'},
    ],
  },
  {
    label: 'Praktike',
    href: '/praktike',
    isClickable: false,
    dropdown: [
      {label: 'Pileli', href: '/praktike/pileli'},
      {label: 'Fular Sportiv duz', href: '/praktike/sportiv'},
      {label: 'Namaz Ortusu', href: '/praktike/ortusu'},
      {label: 'Hazir Turban', href: '/praktike/tese'},
      {label: 'Tesettur', href: '/praktike/viscon'},
      // {label: 'Fernuarli Viscon', href: '/praktike/viscon'},
      {label: 'Per femije', href: '/praktike/femije'},
      {label: 'Praktik Penye Sal ', href: '/praktike/penye'},
    ],
  },
  {
    label: 'Fustan Namazi',
    href: '/fustan-namazi',
    isClickable: false,
    dropdown: [
      {label: 'Per te rritur', href: '/fustan-namazi/per-te-rritur'},
      {label: 'Per femije', href: '/fustan-namazi/per-femije'},
    ],
  },
  {
    label: 'Aksesor',
    href: '/aksesor',
    isClickable: true,
    Component: Aksesor,
  },
    {
    label: 'Aktivitetet',
    href: '/aktivitete',
    isClickable: false,
    dropdown: [
      {label: 'Sflitat', href: '/aktivitete/sfiltata'},
      {label: 'Panairet', href: '/aktivitete/panaire'},
      {label: 'Politikat e dhurimit', href: '/aktivitete/politikat-e-dhurimit'},
    ],
  },
];

function App() {
  return (
      <div className="bg-[#F9F8FF]">
        <WhatsAppWidget />
        <BasicLayout navItems={navItems}>
          <ScrollToTop />
          <Switch>
            <Route path="/" component={() => <Home navItems={navItems}/>}/>
            <Route path="/chiffon/shall-ch-180" component={() => <ChiffonShall180/>}/>
            <Route path="/chiffon/shami-ch-150" component={() => <ChiffonShall150/>}/>
            <Route path="/chiffon/shall-ch-gur" component={() => <ChiffonShallGur/>}/>
            <Route path="/jersey/shall-jr-180" component={() => <Jersey180/>}/>
            <Route path="/jersey/shami-jr-200" component={() => <Jersey200/>}/>
            <Route path="/jersey/shall-jr-gur" component={() => <JerseyGur/>}/>
            <Route path="/jersey/dredha" component={() => <ZharsMeDredha />}/>
            <Route path="/jazz/shall-jazz-200" component={() => <JazzShall200/>}/>
            <Route path="/jazz/shall-krep" component={() => <ShallKrep/>}/>
            <Route path="/about-us" component={() => <AboutUs/>}/>
            <Route path="/aktivitete/bamiresi" component={() => <Bamiresite/>}/>
            <Route path="/aktivitete/sfiltata" component={() => <Sfilatat/>}/>
            <Route path="/aktivitete/panaire" component={() => <Panairet/>}/>
            <Route path="/aktivitete/politikat-e-dhurimit" component={() => <PolitikatEDhurimit/>}/>
            <Route path="/fustan-namazi/per-te-rritur" component={() => <FustanNamaziAdults/>}/>
            <Route path="/fustan-namazi/per-femije" component={() => <FustanNamaziKids/>}/>
            <Route path="/praktike/ortusu" component={() => <PraktikeNamazOrtusu/>}/>
            <Route path="/praktike/pileli" component={() => <PraktikePileli/>}/>
            <Route path="/praktike/tese" component={() => <PraktikeHazirTurban/>}/>
            <Route path="/praktike/viscon" component={() => <PraktikeTesettur/>}/>
            <Route path="/praktike/sportiv" component={() => <PraktikeSport/>}/>
            <Route path="/praktike/femije" component={() => <PraktikeFemije/>}/>
            <Route path="/praktike/penye" component={() => <PraktikePenye/>}/>
            <Route path="/kapuc/ceneli" component={() => <KapucCeneli/>}/>
            <Route path="/kapuc/aspirim" component={() => <KapucEcardinAspirim/>}/>
            <Route path="/kapuc/classic" component={() => <KapucEcardinClassic/>}/>
            <Route path="/kapuc/silikon400" component={() => <KapucSilikon400/>}/>
            <Route path="/kapuc/silikon500" component={() => <KapucSilikon500/>}/>
            <Route path="/kapuc/klimatik" component={() => <KapucKlimatik/>}/>
            <Route path="/kapuc/sedef" component={() => <KapucSedef/>}/>
            <Route path="/kapuc/tub" component={() => <KapucTub/>}/>
            {/*<Route path="/kapuc/tyl-tjeter" component={() => <KapucTylTjeter/>}/>*/}
            <Route path="/kapuc/tyl-i-lehte" component={() => <KapucTylLehte/>}/>
            <Route path="/kapuc/elastik" component={() => <KapucXhElastik/>}/>
            <Route path="/kapuc/pambuk" component={() => <KapucXhPambuk/>}/>
            <Route path="/shkelqim" component={() => <ShamiShkelqim/>}/>
            {navItems.map(({href, Component}) => <Route key={href} path={href} component={Component}/>)}
          </Switch>
        </BasicLayout>
      </div>
  );
}

export default App;

export function ScrollToTop() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, })
  }, [location])

  return null
}