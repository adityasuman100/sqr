import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
  pdf,
  PDFViewer,
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

// Function to convert Blob to Base64
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

function App() {
  function MyDoc() {
    return (
      <PDFViewer>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              {/* <Test /> */}
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  const [base64, setBase64] = React.useState("");
  const generateBase64 = async () => {
    const blob = await pdf(<MyDoc />).toBlob();
    const base64 = await blobToBase64(blob);
    console.log(base64);
    setBase64(base64);
  };
  const [instance, updateInstance] = usePDF({ document: <MyDoc /> });
  // console.log("instance is ", instance);
  // console.log("updateInstance is ", updateInstance);
  // console.log("type of MyDoc ", typeof MyDoc);
  // console.log("type of updateInstance is ", typeof updateInstance);
  // console.log(renderToBuffer(MyDoc)); will not run in browser
  // const blob = pdf(MyDoc).toBlob();
  // console.log(blob);
  return (
    <div>
      <p>Hello</p>
      <MyDoc />
      <button onClick={() => generateBase64()}>Base64</button>
      {/* {instance.loading ? "loading" : <MyDoc />} */}
      {/* {instance.blob && JSON.stringify(instance.blob)}
      {instance.error && JSON.stringify(instance.error)}
      {instance.blob && JSON.stringify(instance.blob)} */}
      {base64 && JSON.stringify(base64)}
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
