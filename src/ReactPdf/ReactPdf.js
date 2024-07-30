import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function App() {
  function MyDoc() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Test />
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    );
  }
  const [instance, updateInstance] = usePDF({ document: MyDoc });
  console.log("instance is ", instance);
  // const blob = pdf(MyDoc).toBlob();
  // console.log(blob);
  return (
    <div>
      <p>Hello</p>
      {instance.blob && JSON.stringify(instance.blob)}
      {instance.error && JSON.stringify(instance.error)}
      {instance.blob && JSON.stringify(instance.blob)}
      {/* <MyDoc /> */}
      {/* <BlobProvider document={MyDoc}>
        {({ blob, url, loading, error }) => {
          // Do whatever you need with blob here
          console.log(blob);
          console.log(url);
          console.log(loading);
          console.log(error);
          return <div>There's something going on on the fly</div>;
        }}
      </BlobProvider> */}
    </div>
  );
}

function Test() {
  return <div>Hello</div>;
}

export default App;
