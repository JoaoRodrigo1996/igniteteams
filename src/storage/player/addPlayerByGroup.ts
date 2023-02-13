import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function addPlayerByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await getPlayersByGroup(group);

    const playerAlreadyExist = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExist.length > 0) {
      throw new AppError(
        "Já existe uma pessoa com esse nome cadastrada em um time aqui."
      );
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
