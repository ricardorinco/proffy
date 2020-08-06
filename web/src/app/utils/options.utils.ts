import { Option } from './../models/option';

export class OptionsUtils {

    public static getWeekDays(): Option[] {
        return [
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' }
        ];
    }

    public static getSubjects(): Option[] {
        return [
            { value: 'Artes', label: 'Artes' },
            { value: 'Português', label: 'Português' },
            { value: 'Redação', label: 'Redação' },
            { value: 'Inglês', label: 'Inglês' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Física', label: 'Física' },
            { value: 'Química', label: 'Química' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'História', label: 'História' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'Filosofia', label: 'Filosofia' },
            { value: 'Sociologia', label: 'Sociologia' },
            { value: 'Educação Física', label: 'Educação Física' }
        ];
    }
}
