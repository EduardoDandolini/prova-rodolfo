import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .matches(/^[a-zA-Z\s]+$/, 'Nome inválido. Apenas letras são permitidas.'),
  
  email: yup
    .string()
    .email('O e-mail não é válido')
    .required('O e-mail é obrigatório'),
  
  senha: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[@$!%*?&]/, 'A senha deve conter pelo menos um caractere especial'),
  
  foto: yup.string().url('A foto deve ser uma URL válida'),
});
