import {Fragment} from 'react'
import './Home.scss';
import grayEnergy from '../../assets/icons/green-energy.png';
import cup from '../../assets/icons/cup.png';
import ecoFuel from '../../assets/icons/eco-fuel.png';
import leaf from '../../assets/icons/leaf.png';
import slider from '../../assets/img/sliders/slider-1.jpg';
import {useNavigate} from 'react-router';
import Header from "../../components/Header/Header";

export default function Home() {

    const navigate = useNavigate();

    const missions = [
        {
            id: 1,
            img: grayEnergy,
            title: 'TEMİZ ENERJİ',
            text: 'Temiz enerji, güneş, rüzgar, hidroelektrik ve jeotermal gibi çevresel etkisi minimum düzeyde olan ve sonlu fosil yakıtlara olan bağımlılığı azaltan, çevrenin korunmasına, enerji güvenliğine ve ekonomik büyümeye katkıda bulunan yenilenebilir, sürdürülebilir güç kaynaklarını ifade eder.'
        },
        {
            id: 2,
            img: cup,
            title: 'PLASTİK TÜKETİMİ',
            text: 'Plastik kullanımının azaltılması veya ortadan kaldırılması, daha sürdürülebilir ve çevre dostu bir yaşam tarzına katkıda bulunur. Bu, yeniden kullanılabilir malzemeler, biyolojik olarak parçalanabilen plastikler gibi alternatiflerin benimsenmesini ve geri dönüşüme ve atık azaltımına öncelik veren döngüsel bir ekonominin desteklenmesini içerir.'
        },
        {
            id: 3,
            img: ecoFuel,
            title: 'FOSİL YAKITLAR',
            text: 'Çevreye, ekonomiye ve halk sağlığına olan zararlı etkileri nedeniyle fosil yakıtların kullanımından kaçınmak zorunludur. Fosil yakıtların yanması sera gazlarının açığa çıkmasına neden oluyor, iklim değişikliğini şiddetlendiriyor ve şiddetli hava olaylarına yol açıyor. Fosil yakıtların çıkarılması ve işlenmesi kaynakların tükenmesine, çevresel bozulmaya ve jeopolitik gerilimlere katkıda bulunur.'
        }
    ]

    return (
        <Fragment>
            <Header/>
            <div className="main-banner">
                <img src={slider} alt="karbon ayakizi"/>

                <div className="content">
                    <div className="text">
                        <h2>DOĞAYA VERDİĞİNİZ ZARARI</h2>
                        <h2>BİLİYOR MUSUNUZ?</h2>
                        <span className="line"></span>
                        <p>Bireysel karbon ayak izinin bir kısmını da olsa tahmini olarak ölçülebilmesi bazı hesaplama
                            yöntemleri
                            bulunmaktadır. Gelin birlikte karbon ayak izinizi hesaplayalım.</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="subtitle">
                    <h2>Dünyamızı kurtarmak bizim elimizde!</h2>
                    <span className="line">

                        <img src={leaf} alt="karbon ayakizi"/>
                        <img src={leaf} alt="karbon ayakizi"/>

                    </span>
                    <p>İşte bunu yapmak için bazı dikkat etmemiz gerekenler;</p>
                </div>
                <div className="missions">
                    {missions.map((mission, index) => {

                        return (
                            <div key={index} className="box">
                                <img src={mission.img} alt="karbon ayakizi"/>
                                <h4>{mission.title}</h4>
                                <p>{mission.text}</p>
                            </div>
                        )
                    })}

                </div>
            </div>


            <div className="calculate-section">
                <div className="container">
                    <h2>Karbon Ayakizini Hesapla</h2>
                    <span className="line"></span>
                    <p>Karbon ayak izi, insan faaliyetleri sonucu atmosfere salınan sera gazlarının karbondioksit (CO2)
                        eşdeğerinde
                        çeşitli yöntemlerle hesaplama çalışmasıdır. CO2 emisyonu, yani salınımı olarak adlandıracağımız
                        bu sonuç, dünyaya
                        birçok açıdan zarar verir.
                        Bunların en önemli etkileri küresel ısınma, iklim değişikliği ve doğal hayatın tehlikeye
                        düşmesidir.</p>
                    <p>Bireysel karbon ayak izinin bir kısmını da olsa tahmini olarak ölçülebilmesi bazı hesaplama
                        yöntemleri
                        bulunmaktadır. Bireysel olarak doğaya ve yaşadığımız gezegene verdiğimiz zararı en aza
                        indirgemek için gelin
                        birlikte karbon ayak izinizi hesaplayalım.</p>
                    <button className="custom-button"
                            onClick={() => {
                                navigate('/calculate')
                            }}
                    >Hesapla
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
