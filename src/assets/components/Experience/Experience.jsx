import experience1 from '../../1.jpg'
import experience2 from '../../2.jpg'
import experience3 from '../../3.jpg'
import experience4 from '../../4.jpg'
import experience5 from '../../5.jpg'
import experience6 from '../../6.jpg'
import experience7 from '../../7.jpg'
import experience8 from '../../8.jpg'

const products = [
  {
    id: 1,
    name: "With a minimalist touch",
    href: "#",
    imageSrc: experience1,
    imageAlt:
      "Living room with a minimalist touch.",
  },
  {
    id: 2,
    name: "Stylish sofa area",
    href: "#",
    imageSrc:
      experience2,
    imageAlt:
      "Stylish sofa area.",
  },
  {
    id: 3,
    name: "Modern bedroom",
    href: "#",
    imageSrc:
      experience3,
    imageAlt:
      "Modern bedroom",
  },
  {
    id: 4,
    name: "Glamorous and comfortable corner",
    href: "#",
    imageSrc:
      experience4,
    imageAlt:
      "Glamorous and comfortable corner with chair and complements",
  },
  {
    id: 4,
    name: "Neat, stylish, and in line with the latest",
    href: "#",
    imageSrc:
      experience6,
    imageAlt:
      "Neat, stylish, and in line with the latest.",
  },
  {
    id: 4,
    name: "Fully combined space",
    href: "#",
    imageSrc:
      experience7,
    imageAlt:
      "Fully combined space.",
  },
  {
    id: 4,
    name: "With marble elegance",
    href: "#",
    imageSrc:
      experience5,
    imageAlt:
      "With marble elegance.",
  },
  {
    id: 4,
    name: "Simple, modern and minimalistic",
    href: "#",
    imageSrc:
      experience8,
    imageAlt:
      "Simple, modern and minimalistic.",
  }
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl text-center sm:pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Experience
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Take a look at the work we have done and get the chance to hire us.{" "}
        </p>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-72 w-72 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
