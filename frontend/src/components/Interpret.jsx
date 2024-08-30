import React from 'react';
import "../styles/interpret.scss"

const Interpretation = ({ age, patientClass }) => {
  let interpretation = '';
  console.log(age)

  if (patientClass === 'glioma') {
    if (age >= 0 && age <= 18) {
      interpretation = (
        <div   className="interpretation">
          <h2 className='title'>Pediatric Patients (0-18 years old):</h2>
          <p>
            Gliomas in children often arise in specific locations such as the
            brainstem, optic pathways, or cerebellum. High-grade gliomas such
            as diffuse intrinsic pontine gliomas (DIPG) are more common in
            this age group. Imaging may show diffuse infiltration of the
            brainstem or other structures, often without a distinct mass
            lesion. Associated findings might include hydrocephalus due to
            obstruction of cerebrospinal fluid flow.
          </p>
        </div>
      );
    }
     if (age > 18 && age <= 40) {
      interpretation = (
        <div className="interpretation">
          <h2 className='title'>Young Adults (18-40 years old):</h2>
          <p>
            Gliomas in young adults can vary widely in location and grade,
            including both low-grade and high-grade tumors. Common locations
            include the cerebral hemispheres, particularly in the frontal and
            temporal lobes. Imaging may reveal contrast-enhancing masses with
            surrounding edema, suggesting a high-grade glioma like glioblastoma
            multiforme (GBM). Diffusion-weighted imaging (DWI) can help
            differentiate between tumor and surrounding edema.
          </p>
        </div>
      );
    }
  } else if (patientClass === 'meningioma') {
    if (age >= 0 && age <= 18) {
      interpretation = (
        <div className="interpretation">
          <h2 className='title'>Pediatric Patients (0-18 years old):</h2>
          <p>
            Meningiomas are rare in children but can occur, typically in
            adolescents. Pediatric meningiomas often present as extra-axial
            lesions, commonly found at the skull base or along the falx
            cerebri. Imaging may reveal well-defined, contrast-enhancing masses
            with dural tail sign, indicating attachment to the dura mater.
            Associated findings might include bony erosion or hyperostosis due
            to chronic irritation.
          </p>
        </div>
      );
    } else if (age > 18 && age <= 40) {
      interpretation = (
        <div className="interpretation">
          <h2 className='title'>Young Adults (18-40 years old):</h2>
          <p>
            Meningiomas are more commonly encountered in young adults,
            especially in females. Typical locations include the convexities of
            the cerebral hemispheres and the parasagittal region. Imaging
            characteristics often include well-defined, contrast-enhancing
            masses with dural attachment and adjacent bony changes. Evaluation
            for mass effect on adjacent structures, such as compression of
            adjacent brain parenchyma or displacement of ventricles, is
            important.
          </p>
        </div>
      );
    }
  } else if (patientClass === 'pituitary') {
    if (age >= 0 && age <= 18) {
      interpretation = (
        <div className="interpretation">
          <h2 className='title'>Pediatric Patients (0-18 years old):</h2>
          <p>
            Pituitary tumors are relatively rare in pediatric patients but can
            occur. The most common pituitary tumor in this age group is
            prolactinoma, which may present with symptoms related to hormone
            hypersecretion (e.g., precocious puberty or galactorrhea). Other
            types of pituitary tumors, such as growth hormone-secreting
            adenomas or non-functioning adenomas, can also occur but are less
            common. Imaging findings may include well-defined, contrast-enhancing
            masses within the sella turcica, often with suprasellar extension.
            Close attention should be paid to the impact of the tumor on growth
            and development.
          </p>
        </div>
      );
    } else if (age > 18 && age <= 40) {
      interpretation = (
        <div className="interpretation">
          <h2 className='title'>Young Adults (18-40 years old):</h2>
          <p>
            Pituitary tumors are more frequently encountered in young adults,
            particularly women. Common tumor types include prolactinomas,
            growth hormone-secreting adenomas (causing acromegaly), and
            non-functioning adenomas. Imaging may reveal well-defined,
            contrast-enhancing masses within the sella turcica, often with
            compression of the optic chiasm or invasion into the cavernous sinus.
            Symptoms may include visual disturbances, headaches, menstrual
            irregularities (in women), and features of hormone hypersecretion or
            hypopituitarism.
          </p>
        </div>
      );
    }
  }

  return <div>{interpretation}</div>;
};

export default Interpretation;
