const people = [
    {
      imageUrl:
        'https://img.freepik.com/free-vector/flat-design-kids-store-landing-page_23-2149619784.jpg?size=626&ext=jpg&ga=GA1.2.291539164.1693422185&semt=ais',
        width : 50,
        height:50,
    },
    {
        imageUrl:
          'https://img.freepik.com/free-vector/hand-drawn-kids-fashion-landing-page_23-2149590754.jpg?size=626&ext=jpg&ga=GA1.2.291539164.1693422185&semt=ais',
          width : 50,
        height:50,
      },
      {
        imageUrl:
          'https://img.freepik.com/free-vector/flat-sale-banner-children_23-2149564958.jpg?size=626&ext=jpg&ga=GA1.2.291539164.1693422185&semt=ais',
          width : 50,
          height:50,
        },
      {
        imageUrl:
          'https://img.freepik.com/premium-psd/baby-fashion-cloth-wear-sale-banner-post-promotional-web-banner-psd-file_673898-771.jpg?size=626&ext=jpg&ga=GA1.1.291539164.1693422185&semt=ais',
          width : 50,
          height:50,
        },
      {
        imageUrl:
          'https://img.freepik.com/premium-vector/kids-fashion-landing-page-template_23-2149637578.jpg?size=626&ext=jpg&ga=GA1.1.291539164.1693422185&semt=ais',
          width : 50,
          height:50,
        },
      {
        imageUrl:
          'https://img.freepik.com/free-vector/flat-sale-landing-page-with-photo-template_23-2149054394.jpg?size=626&ext=jpg&ga=GA1.1.291539164.1693422185&semt=ais',
          width : 50,
          height:50,
        }
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-blue py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Baby Products</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            <h2>You know what the great thing about babies is? They are like little bundles of hope. Like the future in a basket.</h2>
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="height=10 width=10 rounded-full" src={person.imageUrl} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }