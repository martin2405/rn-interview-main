import { FlatList, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Candidate, getCandidates } from "@/api/candidates";
import { useEffect, useState } from "react";

const ListCandidates = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const fetchCandidates = async () => {
    setIsLoading(true);
    await getCandidates()
      .then(({ data }) => {
        setIsError(false);
        setCandidates(data);
      })
      .catch(() => {
        setIsError(true);
        setCandidates([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <ThemedView className="gap-8 p-8 pt-16">
      <ThemedText className="text-3xl font-bold leading-8">
        Candidates
      </ThemedText>

      {isError && (
        <ThemedText className="text-red-500">
          Something went wrong with downloading candidates, try again
        </ThemedText>
      )}

      <FlatList
        data={candidates}
        renderItem={({ item }) => (
          <View key={item.id} className="p-2 rounded-lg border border-gray-300">
            <ThemedText>
              {item.firstName} {item.lastName}
            </ThemedText>
          </View>
        )}
        onRefresh={fetchCandidates}
        refreshing={isLoading}
        ItemSeparatorComponent={() => <View className="h-4" />}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
};

export default ListCandidates;
