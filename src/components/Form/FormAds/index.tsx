import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdsContext } from "../../../providers/adsProvider";
import { ButtonCanceled, ButtonCreateAdvertiser } from "../../Buttons";
import Input from "../Input";
import { StyledModalCreateAds } from "./style";
import { SelectBrand } from "../Select/SelectBrand";





const createAdsSchema = z.object({
    brand: z.string().min(1, "A marca é obrigatória"),
    model: z.string().min(1, "O modelo é obrigatório"),
    year: z.number().min(4, "O ano deve conter 4 dígitos."),
    km: z.number().min(5, "A kilometragem 5 dígitos."),
    fuel: z.number().min(1, "Escolha de 1 a 3 um valor para o combustível."),

    color: z.string().min(1, "Deve conter a cor do veículo."),
    priceFip:z.number().min(5,"O valor da tabela fip é obrigatório!"),
    price:z.number().min(5,"O preço do veículo é obrigatório!"),
    description: z.string().min(1, "A descrição deve ser obrigatória"),
    imageCapa: z.string().min(1, "Deve conter um link com a imagem da capa."),
    imageGaleryOne: z.string().min(1, "Deve conter um link com a imagem para a galeria."),
    imageGaleryTwo: z.string().min(1, "Deve conter um link com outra imagem para a galeria.."),

  });
  type TRegisterAds = z.infer<typeof createAdsSchema>;

   export const RegisterFormAds = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<TRegisterAds>({
      resolver: zodResolver(createAdsSchema),
    });
    const {createAds} = useContext(AdsContext)

    const createDataAds = (data: any) => {

        const newData= {...data}

        createAds(newData);
        // reset();
      };


    const [formSubmitError, setFormSubmitError] = useState("");

    return (
        <StyledModalCreateAds onSubmit={handleSubmit(createDataAds)}>

       <div className="divTitleBtnClose"> <h1>Criar anúncio</h1> <button>X</button></div>

        <p>Informações pessoais</p>

        <div className="containerSelects">
            {/* <select name="" id="">
                <option value="teste">teste</option>
            </select>
            <select name="" id="">
                <option value="teste">teste</option>
            </select> */}
           <SelectBrand/>
        </div>
        <div className="divOrganizationForm">
            <div className="divOrganization1">
            <Input
            label="Ano"
            type="number"
            placeholder="2018"
            register= {register("year")}
            error={errors.year?.message}
            />

            <Input
            label="Quilometragem"
            type="number"
            placeholder="30.000"
            register= {register("km")}
            error={errors.km?.message}
            />

            <Input
            label="Preço tabela FIPE"
            type="number"
            placeholder="R$ 48.000,00"
            register= {register("priceFip")}
            error={errors.priceFip?.message}
            />
            </div>

            <div className="divOrganization1">
            <Input
            label="Combustível"
            type="number"
            placeholder="Gasolina/Etanol"
            register= {register("fuel")}
            error={errors.fuel?.message}
            />
       
            <Input
            label="Cor"
            type="string"
            placeholder="Branco"
            register= {register("color")}
            error={errors.color?.message}
            />
       

            <Input
            label="Preço"
            type="number"
            placeholder="R$ 50.000,00"
            register= {register("price")}
            error={errors.price?.message}
            />
            </div>
         

            
        </div>

         <Input
          label="Descrição"
          type="text"
          placeholder="Lorem ipsum is simply dummy text of the printing and typessetting industry. Lorem Ipsum has been the..."
          register= {register("description")}
          error={errors.description?.message}
        />
        <Input
          label="Imagem da capa"
          type="string"
          placeholder="http://image.com"
          register= {register("imageCapa")}
          error={errors.imageCapa?.message}
        />
          <Input
          label="1º Imagem da galeria"
          type="string"
          placeholder="http://image.com"
          register= {register("imageGaleryOne")}
          error={errors.imageGaleryOne?.message}
        />
         <Input
          label="2º Imagem da galeria"
          type="string"
          placeholder="http://image.com"
          register= {register("imageGaleryTwo")}
          error={errors.imageGaleryTwo?.message}
        />

        {/* <ButtonCanceled/><ButtonCreateAdvertiser/> */}






              </StyledModalCreateAds>

    )
    }