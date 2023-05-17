import { useLoaderData, useParams } from "react-router-dom";


export default function CareersDetails() {

  const { id } = useParams();
  const career = useLoaderData(); 

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary : {career.salary}</p>
        <p>Location : {career.location}</p>
        <div className="details">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi architecto quisquam consequuntur quas? Sapiente necessitatibus facilis voluptatibus optio sequi.</p>
        </div>
    </div>
  )
}

//loader function
export const careerDetailLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/Careers/' + id);

    if (!res.ok) {
      throw Error('Could not find the page you were looking for :/')
    }

    return res.json();
}