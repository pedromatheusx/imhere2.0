import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { ITask } from "../../screens/Home";

interface ITaskChecked {
    data: ITask,
    onRemove: () => void,
    onStocked: () => void
}

export function Task({ data, onRemove, onStocked }: ITaskChecked) {

    return (
        <View style={styles.container}>

            <Checkbox
                style={styles.checkbox}
                value={data.stocked}
                onValueChange={onStocked}
                color={data.stocked ? '#5E60CE' : undefined}
            />

            <Text style={data.stocked ? styles.nameLine : styles.name}>
                {data.name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    <AntDesign name="delete" size={16} color="#FFF" />
                </Text>
            </TouchableOpacity>
        </View>
    );
}