import { useState, useRef, useEffect, use } from "react";
import JoditEditor from "jodit-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("privacy");
  const privacyData = "";
  const termsData = "";

  const [content, setContent] = useState({
    privacy: "",
    terms: "",
  });
  const editor = useRef(null);
  useEffect(() => {
    setContent({
      privacy: privacyData,
      terms: termsData,
    });
  }, [privacyData, termsData]);
  const config = {
    toolbar: {
      items: [
        "bold",
        "italic",
        "underline",
        "align",
        "left",
        "center",
        "right",
        "fontsize",
        "copy",
        "paste",
        "brush",
      ],
    },
    buttons: [
      "bold",
      "italic",
      "underline",
      "left",
      "center",
      "right",
      "copy",
      "paste",
      "brush",
      "fontsize",
    ],
    events: {
      // Focus the editor when content is updated to fix cursor movement issues
      afterChange: () => {
        if (editor.current && editor.current.editor) {
          editor.current.editor.focus();
        }
      },
    },
    // Add these specific list editing options
    list: {
      // Allow indenting lists with Tab key
      allowInsertWithTab: true,
      // Fix list alignment issues
      navigateListWithTab: true,
    },
    // Enhance the editor's ability to handle lists
    enterBlock: "p",
    // Improve content editing capabilities
    editorCssClass: "custom-jodit-editor",
  };

  useEffect(() => {
    if (editor.current && editor.current.editor) {
      editor.current.editor.focus();
    }
  }, [content]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleContentChange = (newContent) => {
    setContent({
      ...content,
      [activeTab]: newContent,
    });
  };

  const updateContent = async (tab, content) => {
    // Send the updated content to the server or perform any other actions
    const data = {
      content: content,
    };
    if (tab === "privacy") {
      //   try {
      //     await updatePrivacy(data);
      //   } catch (error) {
      //     console.error("Error updating privacy policy:", error);
      //   }
    }
    if (tab === "terms") {
      //   try {
      //     await updateTerms(data);
      //   } catch (error) {
      //     console.error("Error updating terms and conditions:", error);
      //   }
    }
  };

  return (
    <div className="">
      <div className="w-full  p-6">
        <div className="flex">
          <button
            className={`px-4 py-2 text-xl ${
              activeTab === "privacy"
                ? "text-black border-b-4 border-black rounded-b-xl transition-color duration-300"
                : "text-gray-500 hover:text-black border-b-4 border-transparent"
            }`}
            onClick={() => handleTabChange("privacy")}
          >
            Privacy Policy
          </button>
          <button
            className={`px-4 py-2 text-xl ${
              activeTab === "terms"
                ? "text-black border-b-4 border-black rounded-b-xl transition-color duration-300"
                : "text-gray-500 hover:text-black border-b-4 border-transparent"
            }`}
            onClick={() => handleTabChange("terms")}
          >
            Terms & Conditions
          </button>
        </div>
        <div className="mt-6 p-4 border rounded-lg">
          <JoditEditor
            ref={editor}
            value={content[activeTab]}
            onBlur={handleContentChange}
            config={config} // Apply the custom config
          />
        </div>
        <div className="flex justify-end">
          <div className="mt-6">
            <button
              className="px-10 py-2 bg-black text-white rounded-md"
              onClick={() => updateContent(activeTab, content[activeTab])}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
