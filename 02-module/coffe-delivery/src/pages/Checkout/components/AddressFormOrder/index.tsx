import { useFormContext } from 'react-hook-form'

import { MapPinLine } from "@phosphor-icons/react";

import { 
  AddressFormOrderDiv, 
  HeaderAddressFormOrder, 
  InputsAddressFormOrder, 
  MediumInput, 
  Input, 
  InputsRow, 
  SmallInput
} from "./styles";

export function AddressFormOrder(){

  const { register } = useFormContext()

  return(
    <AddressFormOrderDiv>

      <HeaderAddressFormOrder>
        <MapPinLine size={22}/>
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </HeaderAddressFormOrder>

      <InputsAddressFormOrder>
        <MediumInput 
          type="text" 
          about="cep" 
          placeholder="CEP"
          {...register('cep')}
        />
        <Input 
          type="text" 
          about="street" 
          placeholder="Rua"
          {...register('street')}
        />

        <InputsRow>
          <MediumInput 
            type="number" 
            about="number" 
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
          />
          <Input 
            type="text" 
            about="complement" 
            placeholder="Complemento"
            {...register('complement')}
          />
        </InputsRow>

        <InputsRow>
          <MediumInput 
            type="text" 
            about="neighborhood" 
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <Input 
            type="text" 
            about="city" 
            placeholder="Cidade"
            {...register('city')}
          />
          <SmallInput 
            type="text" 
            about="uf" 
            placeholder="UF"
            {...register('uf')}
          />
        </InputsRow>

      </InputsAddressFormOrder>

    </AddressFormOrderDiv>
  )
}