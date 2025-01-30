const propiedades_venta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      baños: 4,
      costo: 5.000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      baños: 1,
      costo: 1.200,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion:
        " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      baños: 3,
      costo: 4.500,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Casa familiar con piscina",
      src: "https://www.socovesa.cl/wp-content/uploads/2022/04/parque_los_avellanos-casa110.jpg",
      descripcion:
        "Acogedora casa ubicada en moderno condominio, posee piscina y antejarin",
      ubicacion: "Parque Los Avellanos II",
      habitaciones: 3,
      baños: 2,
      costo: 2.100,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Casa en campo de valdivia",
      src: "https://casaslanco.cl/wp-content/uploads/2020/12/1-copia-1.jpg",
      descripcion:
        "Hermosa casa de campo ubicada en el campo de Valdivia",
      ubicacion: "Riberas de Estancilla, Valdivia",
      habitaciones: 2,
      baños: 1,
      costo: 3.400,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Casa familiar",
      src: "https://cache.enlaceinmobiliario.cl/cdn-cgi/image/format=webp,width=auto,height=293/Nahuen-649cfe401e11a8.webp",
      descripcion:
        "Acogedora casa familiar ubicada en el centro de Curicó",
      ubicacion: "Juan XXIII Rauquen, Curicó",
      habitaciones: 3,
      baños: 2,
      costo: 2.800,
      smoke: false,
      pets: true,
    },
  ];
  
  const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street Anytown, CA 91234",
      habitaciones: 2,
      baños: 2,
      costo: 2.000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue Seaside Town, CA 56789",
      habitaciones: 3,
      baños: 3,
      costo: 2.050,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street Anytown, CA 91234",
      habitaciones: 2,
      baños: 2,
      costo: 2.200,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Moderna casa pre fabricada",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrf3gyAlMA_dD6IoLAi_pRKfvf9HvQ2SN0Q&s",
      descripcion:
        "Esta moderna construccion pre fabricada está ubicado en una tranquila zona residencial",
      ubicacion: "123 calle principal, san joaquin, chile",
      habitaciones: 3,
      baños: 1,
      costo: 6.200,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Casa dos pisos Moderna",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgq1wI2AFn5UyNeU_rdldqdLIcac4XiqI6EQ&s",
      descripcion:
        "Esta moderna construccion pre fabricada está ubicado en una tranquila zona residencial",
      ubicacion: "Miguel claro 123, Providencia, chile",
      habitaciones: 2,
      baños: 1,
      costo: 4.200,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Elegante casa ubicada en condominio privado",
      src: "https://cl.habcdn.com/files/dynamic_content/casas-blancas-295259_hd.jpg",
      descripcion:
        "Moderna y elegante casa ubicada en las afueras de santiago",
      ubicacion: "avda las condes 456, chile",
      habitaciones: 4,
      baños: 2,
      costo: 9.200,
      smoke: false,
      pets: false,
    },
  ];
  
  const contenedor = document.getElementById("contenedorCard");

  

 
  
  for (const propiedad_venta of propiedades_venta) {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
               <img
                  src="${propiedad_venta.src}"
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${propiedad_venta.nombre}
                  </h5>
                  <p class="card-text">
                    ${propiedad_venta.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${
                      propiedad_venta.ubicacion
                    }
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${
                      propiedad_venta.habitaciones
                    } Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad_venta.baños} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${
                    propiedad_venta.costo
                  }</p>
                  <p class="text-danger">
                    <i class="fas ${propiedad_venta.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> ${propiedad_venta.smoke ? "Si se permite fumar" : "No se permite fumar"} 
                  </p>
                  <p class="text-danger">
                    <i class="fa-solid ${propiedad_venta.pets ? "fa-paw" : "fa-ban"}"></i> ${
                      propiedad_venta.pets
                        ? "Si, se permiten mascotas"
                        : "Prohibido ingreso con mascotas"
                    }
                  </p>
                </div>
           </div>
      </div>  
      `;
  }
  
  
  
  