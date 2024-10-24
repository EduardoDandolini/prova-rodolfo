import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '../yupValidation/Yup';
import { UserDTO } from '../interfaces/UserDTO';
import { CreateUser } from '../services/CreateUser';
// import '../page/CreateUserPage.css';

const CadastroUsuario = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<UserDTO>({
        resolver: yupResolver(userSchema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'lstAddresses',
    });

    const onSubmit = async (data: UserDTO) => {
        try {
            const createdUser = await CreateUser(data);
            console.log('Create user:', createdUser);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome</label>
                <input id="name" {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" {...register('senha')} />
                {errors.senha && <p>{errors.senha.message}</p>}
            </div>

            <div>
                <label htmlFor="tipo">Tipo de Perfil</label>
                <input id="tipo" {...register('tipoPerfil.tipo')} />
                {errors.tipoPerfil?.tipo && <p>{errors.tipoPerfil.tipo.message}</p>}
            </div>

            <div>
                <label htmlFor="nivelAcesso">Nível de Acesso</label>
                <input id="nivelAcesso" {...register('tipoPerfil.nivelAcesso')} />
                {errors.tipoPerfil?.nivelAcesso && <p>{errors.tipoPerfil.nivelAcesso.message}</p>}
            </div>

            <h3>Endereços</h3>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <div>
                        <label htmlFor={`lstAddresses.${index}.street`}>Rua</label>
                        <input
                            id={`lstAddresses.${index}.street`}
                            {...register(`lstAddresses.${index}.street` as const)}
                        />
                        {errors.lstAddresses?.[index]?.street && <p>{errors.lstAddresses[index]?.street?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.number`}>Número</label>
                        <input
                            id={`lstAddresses.${index}.number`}
                            {...register(`lstAddresses.${index}.number` as const)}
                        />
                        {errors.lstAddresses?.[index]?.number && <p>{errors.lstAddresses[index]?.number?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.complement`}>Complemento</label>
                        <input
                            id={`lstAddresses.${index}.complement`}
                            {...register(`lstAddresses.${index}.complement` as const)}
                        />
                        {errors.lstAddresses?.[index]?.complement && <p>{errors.lstAddresses[index]?.complement?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.district`}>Bairro</label>
                        <input
                            id={`lstAddresses.${index}.district`}
                            {...register(`lstAddresses.${index}.district` as const)}
                        />
                        {errors.lstAddresses?.[index]?.district && <p>{errors.lstAddresses[index]?.district?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.neighborhood`}>Cidade</label>
                        <input
                            id={`lstAddresses.${index}.neighborhood`}
                            {...register(`lstAddresses.${index}.neighborhood` as const)}
                        />
                        {errors.lstAddresses?.[index]?.neighborhood && <p>{errors.lstAddresses[index]?.neighborhood?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.state`}>Estado</label>
                        <input
                            id={`lstAddresses.${index}.state`}
                            {...register(`lstAddresses.${index}.state` as const)}
                        />
                        {errors.lstAddresses?.[index]?.state && <p>{errors.lstAddresses[index]?.state?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.country`}>País</label>
                        <input
                            id={`lstAddresses.${index}.country`}
                            {...register(`lstAddresses.${index}.country` as const)}
                        />
                        {errors.lstAddresses?.[index]?.country && <p>{errors.lstAddresses[index]?.country?.message}</p>}
                    </div>

                    <div>
                        <label htmlFor={`lstAddresses.${index}.zipCode`}>CEP</label>
                        <input
                            id={`lstAddresses.${index}.zipCode`}
                            {...register(`lstAddresses.${index}.zipCode` as const)}
                        />
                        {errors.lstAddresses?.[index]?.zipCode && <p>{errors.lstAddresses[index]?.zipCode?.message}</p>}
                    </div>

                    <button type="button" onClick={() => remove(index)}>
                        Remover Endereço
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() => append({
                    street: '',
                    number: '',
                    complement: '',
                    district: '',
                    neighborhood: '',
                    city: '',
                    state: '',
                    country: '',
                    zipCode: ''
                })}
            >
                Adicionar Endereço
            </button>


            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroUsuario;
