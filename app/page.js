import Card from "@/components/card";
import Header from "@/components/header";
import { IconMission, IconValues, IconVision } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

export default function Home() {

  return (
    <main className="w-full">
      <Logo srcLogo={"./logo.svg"} />
      {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
      <Image
        srcImage={'./bg_home_mobile.webp'}
        alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
        class={'small:flex medium:hidden larger:hidden extra-larger:hidden'}
      />
      <Image
        srcImage={'./bg_home_hd.webp'}
        alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
        class={'small:hidden medium:flex larger:hidden extra-larger:hidden'}
      />
      <Image
        srcImage={'./bg_home_fullhd.webp'}
        alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
        class={'small:hidden medium:hidden larger:flex extra-larger:hidden'}
      />
      <Image
        srcImage={'./bg_home_ultrawide.webp'}
        alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
        class={'small:hidden medium:hidden larger:hidden extra-larger:flex'}
      />
      <Header
        text={'Potencializamos empresas através das Pessoas!'}
      />
      <article className="my-8 flex items-center justify-center w-full">
        <p className="text-sm larger:text-base extra-larger:text-lg text-center w-3/5 md:w-4/5 2xl:w-3/4">Um <span className="text-moving-orange-01">RH estratégico</span>, alinhado ao negócio focado no desenvolvimento organizacional com profissionais <span className="text-moving-orange-01">Especialistas</span> em Gestão de Pessoas.</p>
      </article>
      <section className="flex items-center justify-center w-full">
        <article className="flex items-center justify-evenly w-4/5 2xl:w-4/6 flex-col md:flex-row my-8">
          <Card 
            selectIcon={<IconMission class="w-3/5" flagColor="#F0A65B" mainColor="#384550"/>}
            cardTextSpan='Missão'
            cardTextContent={
              <p>Potencializar o sucesso dos nossos clientes, por meio do desenvolvimento humano e do engajamento das pessoas</p>
            }
          />
          <Card
            selectIcon={<IconVision class="w-3/5" mainColor="#384550"/>}
            cardTextSpan='Vissão'
            cardTextContent={<p>Ser reconhecida como uma empresa em constante movimento rumo à excelência em Recursos Humanos para nossos clientes</p>}
          />
          <Card
            selectIcon={<IconValues class="w-3/5" mainColor="#384550"/>}
            cardTextSpan='Valores'
            cardTextContent={
              <ul>
                <li>Trabalho em Equipe</li>
                <li>Empatia</li>
                <li>Simplicidade</li>
                <li>Fazer acontecer</li>
                <li>Inovação</li>
                <li>Olho do dono</li>
              </ul>
            }
          />
        </article>
      </section>
    </main>
  )
}
