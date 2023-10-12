import Card from "@/components/card";
import Header from "@/components/header";
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
        srcIcon={'icon_hand.svg'}
        altIcon={'Icone com duas mãos sendo apertadas'}
        text={'Potencializamos empresas através das Pessoas!'}
      />
      <article className="my-8 flex items-center justify-center w-full">
        <p className="text-sm lg:text-base 2xl:text-lg text-center w-3/5 md:w-4/5 2xl:w-3/4">Um <span className="text-moving-orange-01">RH estratégico</span>, alinhado ao negócio focado no desenvolvimento organizacional com profissionais <span className="text-moving-orange-01">Especialistas</span> em Gestão de Pessoas.</p>
      </article>
      <section className="flex items-center justify-center w-full">
        <article className="flex items-center justify-evenly w-4/5 2xl:w-4/6 flex-col md:flex-row my-8">
          <Card
            cardImage='/icon_missao.svg'
            cardAlt='Icone ilustrando uma missão'
            cardTextSpan='Missão'
            cardTextContent={<p>Contribuir para o sucesso dos nossos clientes, através do desenvolvimento e engajamento das pessoas</p>}
          />
          <Card
            cardImage='/icon_visao.svg'
            cardAlt='Icone ilustrando uma visão'
            cardTextSpan='Visão'
            cardTextContent={<p>Ser reconhecida como uma empresa em constante movimento e a melhor parceira de Recursos Humanos para o negócio.</p>}
          />
          <Card
            cardImage='/icon_valores.svg'
            cardAlt='Icone ilustrando uma valores'
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
