import servicesData from "./Services.json";

function Services() {
  return (
    <section id="services" aria-labelledby="servicesTitle">
      <h2 id="servicesTitle">Services & Pricing (Kenya-focused)</h2>
      <p>
        Three clear tiers based on local affordability and business needs.
        Prices shown in Kenyan Shillings (KSh) as starting rates — final quotes
        depend on scope.
      </p>

      <div>
        {servicesData.map((service) => (
      <div key={service.id} role="listitem" aria-labelledby={service.id}>
            <div>
              <div>
                <div id={service.id}>{service.title}</div>
                <div>{service.description}</div>
              </div>
              <div>{service.price}</div>
            </div>

            <ul>
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div>{service.summary}</div>
            <div>
              <a href={service.link}>{service.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
