import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap ite max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          deserunt molestiae beatae. Tempore amet veritatis molestias Optio,
          laudantium.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          deserunt molestiae beatae. Tempore amet
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="shop now" iconURl={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
