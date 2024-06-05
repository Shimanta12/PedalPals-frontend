const Faq = () => {
  return (
    <div className="md:h-screen container mx-auto my-2">
      <h1 className="text-4xl font-bold text-center my-5">
        Frequently Asked Questions?
      </h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of bicycles do you sell?
          </div>
          <div className="collapse-content">
            <p>
              We sell a variety of bicycles including road bikes, mountain
              bikes, hybrid bikes, and kids bikes. We also offer electric
              bicycles and folding bikes.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer bike repair services?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer comprehensive bike repair services, including
              tune-ups, tire changes, brake adjustments, and more. Our
              experienced mechanics can handle all your bike repair needs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I test ride a bike before purchasing?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! We encourage our customers to test ride bikes to
              ensure they find the perfect fit. Just bring a valid ID and a
              credit card for security purposes.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer bike fitting services?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer professional bike fitting services to ensure that
              your bike is adjusted to provide you with the most comfortable and
              efficient ride possible.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What brands do you carry?
          </div>
          <div className="collapse-content">
            <p>
              We carry a wide range of reputable brands including Trek, Giant,
              Specialized, Cannondale, and more. Our selection is curated to
              offer quality and reliability for all types of riders.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer financing options?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer various financing options to help you purchase the
              bike of your dreams. Please ask our staff for details about
              available plans and terms.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              We offer a 30-day return policy for unused bicycles in their
              original condition. Please retain your receipt and bring the bike
              back to the store for a refund or exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
