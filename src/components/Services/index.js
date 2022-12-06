import React from "react"
import Icon5 from "../../images/img-5.png"
import Icon6 from "../../images/img-6.png"
import Icon4 from "../../images/img-4.png"
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements"
const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Hizmetlerimiz</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Veri Analizi</ServicesH2>
          <ServicesP>
            Verilerinizi kullanarak müşterilerinizi tanıyın. Hizmet kalitenizi
            ve satışlarınızı arttırın.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Yazılım</ServicesH2>
          <ServicesP>
            Şirket içi uygulamalarınız birbiriyle konuşsun istemez misiniz?
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Siber Güvenlik</ServicesH2>
          <ServicesP>
            Verileriniz şirketinizin en kıymetli hazinesidir. Her türlü
            senaryoya karşı onları korumak ve yedeğini tutmak gerekir.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
