import br1 from ".././assets/br1.png";
import br2 from ".././assets/br2.png";
import br3 from ".././assets/br3.png";
import br4 from ".././assets/br4.png";
import br5 from ".././assets/br5.png";

export default function BrandsBanner() {
  return (
    <div className="m-auto max-w-[1440px] p-5 flex flex-wrap items-center content-center justify-between gap-32 sm:flex-col sm:justify-center">
      <img className="object-contain" src={br1} alt="" />
      <img className="object-contain" src={br2} alt="" />
      <img className="object-contain" src={br3} alt="" />
      <img className="object-contain" src={br4} alt="" />
      <img className="object-contain" src={br5} alt="" />
    </div>
  );
}
