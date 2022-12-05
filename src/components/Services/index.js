import React from "react"
import Icon1 from "../../images/img-1.png"
import Icon2 from "../../images/img-2.png"
import Icon3 from "../../images/img-3.png"
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
          <ServicesIcon src={Icon1} />
          <ServicesH2>Veri Analizi</ServicesH2>
          <ServicesP>
            Verilerinizi kullanarak müşterilerinizi tanıyın. Hizmet kalitenizi
            ve satışlarınızı arttırın.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Veri Analizi</ServicesH2>
          <ServicesP>
            Verilerinizi kullanarak müşterilerinizi tanıyın. Hizmet kalitenizi
            ve satışlarınızı arttırın.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Veri Analizi</ServicesH2>
          <ServicesP>
            Verilerinizi kullanarak müşterilerinizi tanıyın. Hizmet kalitenizi
            ve satışlarınızı arttırın.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
