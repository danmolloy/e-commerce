import Image from "next/image";
import Layout from "../components/layout";

export default function About() {

  return (
    <Layout>
      <h1 className="p-2 text-amber-500">About</h1>
      <h2 className="p-4 italic text-gray-500 text-xl">We are a family-run business, roasting coffee since 1941.</h2>
      <div className="self-center">
        <Image src="/images/coffee-farm.jpeg" height="400" width="600" />
      </div>
      <p className="my-8 p-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo urna a ipsum facilisis convallis. Mauris consectetur fringilla leo ut ornare. Maecenas libero tortor, gravida eu varius non, lobortis at lacus. Sed eros dui, consequat quis nibh sed, egestas cursus purus. Quisque ac consectetur tortor, nec viverra augue. Nulla facilisi. Fusce fermentum quam tempor neque ultricies, ac pretium est facilisis. Vestibulum ut quam mattis, pharetra nibh sit amet, ornare elit.
      </p>
    </Layout>
  )
}