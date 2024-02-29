import br1 from ".././assets/br1.png";
import br2 from ".././assets/br2.png";
import br3 from ".././assets/br3.png";
import br4 from ".././assets/br4.png";
import br5 from ".././assets/br5.png";

export default function BrandsBanner() {
  return (
    <div className="w-full bg-inherit px-5 py-10 flex flex-wrap items-center content-center justify-around gap-32 sm:flex-col sm:justify-center">
      <img className="object-contain scale-125" src={br1} alt="" />
      <img className="object-contain scale-125" src={br2} alt="" />
      <img className="object-contain scale-125" src={br3} alt="" />
      <img className="object-contain scale-125" src={br4} alt="" />
      <img className="object-contain scale-125" src={br5} alt="" />
    </div>
  );
}
