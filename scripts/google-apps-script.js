/* eslint-disable */
/**
 * Harmony of Life - Google Apps Script Webhook Handler
 * 
 * Target Google Sheets Tabs:
 * - Products: Timestamp, Full Name, Phone (WhatsApp), Email ID, City, Referral Name, Additional Notes
 * - Knowledge: Timestamp, Full Name, Phone (WhatsApp), Email ID, City, Referral Name, Learning Topic, Additional Notes
 * - Opportunity: Timestamp, Full Name, Phone (WhatsApp), Email ID, City, Referral Name, Role / Focus, Professional Background, Additional Notes
 * - Newsletter: Timestamp, Email Address
 */

function doPost(e) {
  try {
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Get parameters
    var params = e && e.parameter ? e.parameter : {};
    var sheetName = params.sheetName || "Products";
    var targetSheet = sheet.getSheetByName(sheetName);
    
    // Auto-create sheet tab with styled header columns if it doesn't exist
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(sheetName);
      
      if (sheetName === "Products") {
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone (WhatsApp)", 
          "Email ID", 
          "City", 
          "Referral Name", 
          "Additional Notes"
        ]);
        targetSheet.getRange("A1:G1").setFontWeight("bold").setBackground("#e9e0cf").setFontColor("#142b23");
      } else if (sheetName === "Knowledge") {
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone (WhatsApp)", 
          "Email ID", 
          "City", 
          "Referral Name", 
          "Learning Topic / Interest", 
          "Additional Notes"
        ]);
        targetSheet.getRange("A1:H1").setFontWeight("bold").setBackground("#e9e0cf").setFontColor("#142b23");
      } else if (sheetName === "Opportunity") {
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone (WhatsApp)", 
          "Email ID", 
          "City", 
          "Referral Name", 
          "Role / Focus", 
          "Professional Background", 
          "Additional Notes"
        ]);
        targetSheet.getRange("A1:I1").setFontWeight("bold").setBackground("#e9e0cf").setFontColor("#142b23");
      } else if (sheetName === "Popup") {
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone (WhatsApp)", 
          "Email ID", 
          "City", 
          "Referral Name"
        ]);
        targetSheet.getRange("A1:F1").setFontWeight("bold").setBackground("#e9e0cf").setFontColor("#142b23");
      } else if (sheetName === "Newsletter") {
        targetSheet.appendRow(["Timestamp", "Email Address"]);
        targetSheet.getRange("A1:B1").setFontWeight("bold").setBackground("#e9e0cf").setFontColor("#142b23");
      } else {
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone (WhatsApp)", 
          "Email ID", 
          "City", 
          "Referral Name", 
          "Pathway", 
          "Interest", 
          "Background", 
          "Additional Notes"
        ]);
        targetSheet.getRange("A1:J1").setFontWeight("bold").setBackground("#e9e0cf").setFontColor("#142b23");
      }
    }

    var rowData = [];
    var timestamp = new Date();
    
    // Format row data according to the pathway
    if (sheetName === "Products") {
      rowData = [
        timestamp,
        params.name || "",
        params.phone || "",
        params.email || "",
        params.city || "",
        params.referral || "",
        params.message || ""
      ];
    } else if (sheetName === "Knowledge") {
      rowData = [
        timestamp,
        params.name || "",
        params.phone || "",
        params.email || "",
        params.city || "",
        params.referral || "",
        params.interest || "",
        params.message || ""
      ];
    } else if (sheetName === "Opportunity") {
      rowData = [
        timestamp,
        params.name || "",
        params.phone || "",
        params.email || "",
        params.city || "",
        params.referral || "",
        params.interest || "",
        params.background || "",
        params.message || ""
      ];
    } else if (sheetName === "Popup") {
      rowData = [
        timestamp,
        params.name || "",
        params.phone || "",
        params.email || "",
        params.city || "",
        params.referral || ""
      ];
    } else if (sheetName === "Newsletter") {
      rowData = [
        timestamp,
        params.Emails || params.email || ""
      ];
    } else {
      rowData = [
        timestamp,
        params.name || "",
        params.phone || "",
        params.email || "",
        params.city || "",
        params.referral || "",
        params.pathway || "",
        params.interest || "",
        params.background || "",
        params.message || ""
      ];
    }
    
    // Append lead entry to the designated sheet
    targetSheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", result: "Lead recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
